import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import * as plugin from './index.js';
const settings = { server:'https://cloud.example/index.php/apps/music/ampache/server/xml.server.php', username:'listener', password:'päss🔑' };
const storage = new Map();
globalThis.host = { setting:k=>settings[k], storage:{get:k=>storage.get(k),set:(k,v)=>storage.set(k,v),remove:k=>storage.delete(k)} };
const song = {id:7,title:'Song',artist:{id:2,name:'Artist'},album:{id:3,name:'Album'},time:123,format:'flac',url:'https://cloud.example/audio?auth=token'};
let handler;
globalThis.fetch = async input => {
  const url = new URL(input);
  assert.match(url.pathname,/json\.server\.php$/);
  const action = url.searchParams.get('action');
  if (action === 'handshake') {
    const hash = s=>createHash('sha256').update(s).digest('hex');
    assert.equal(url.searchParams.get('auth'),hash(url.searchParams.get('timestamp')+hash(settings.password)));
    return {ok:true,json:async()=>({auth:'token'})};
  }
  assert.equal(url.searchParams.get('auth'),'token');
  return {ok:true,json:async()=>handler(action,url.searchParams)};
};
test('authentication, JSON mapping, pagination, playback and session lifecycle',async()=>{
  assert.equal(plugin.account(),null);
  assert.deepEqual(await plugin.signIn(),{id:'listener',name:'listener'});
  handler = action => action === 'songs' ? {song:[song]} : song;
  const found = await plugin.search({query:'Song',kind:'tracks'});
  assert.equal(found.tracks[0].duration,123000);
  assert.equal(found.tracks[0].album.id,'3');
  assert.equal(found.more,false);
  assert.equal((await plugin.stream({id:'7'})).type,'flac');
  handler = (action,p) => action === 'album' ? {id:3,name:'Album'} : {song:Number(p.get('offset'))===0 ? Array(100).fill(song):[song]};
  assert.equal((await plugin.album({id:'3'})).tracks.length,101);
  handler = () => ({error:{code:401,message:'private password'}});
  await assert.rejects(plugin.search({kind:'tracks'}),e=>e.code==='signIn'&&!e.message.includes('private'));
  assert.equal(plugin.account(),null);
  await plugin.signIn();
  plugin.setSetting({key:'password',value:'new'});
  assert.equal(plugin.account(),null);
  settings.server='file:///tmp/no';
  await assert.rejects(plugin.signIn(),e=>e.code==='setup');
});
