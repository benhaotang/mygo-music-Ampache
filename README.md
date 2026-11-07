# Ampache Compatibe Music Server for MyGo Music

Plays Music from a Ampache-compatibe server in [MyGo Music](https://github.com/egoist/mygo-music), for example, your self-hosted Nextcloud Music. Currently only Music and Albums are supported, Internet Radio is WIP.



## Install

Either install with the deeplink:

[mygo-music://install-plugin?repo=benhaotang/my-go-music-plugin-Ampache](mygo-music://install-plugin?repo=benhaotang/my-go-music-plugin-Ampache)

Or paste the GitHub URL in Settings > Plugins:

[https://github.com/benhaotang/my-go-music-plugin-Ampache](https://github.com/benhaotang/my-go-music-plugin-Ampache)

## Signing in

Follow the instruction provided by your server, you will need

- A server URL that ends with `/server/xml.server.php`
- Your username and password

Take Nextcloud Music as example, you generate a new Ampache specific password in Nextcloud Music's settings' page, and paste in the Ampache server URL + `/server/xml.server.php` provided on the same page as the server URL.

## Lyrics

From [Better Lyrics](https://github.com/better-lyrics/better-lyrics) when available.

## Ending Note

Tested with NextCloud Music v3.3.0 and [MyGo Music](https://github.com/egoist/mygo-music) 0.1.16

## 中文说明

本插件是为 [MyGo Music](https://github.com/egoist/mygo-music) 加上适用于类似 NextCloud Music 的 Ampache 兼容音乐服务器而制作的，目前只支持音乐和歌单，暂不支持部分Ampache 服务器中的互联网收音机或博客。

要么通过 App 链接 [mygo-music://install-plugin?repo=benhaotang/my-go-music-plugin-Ampache](mygo-music://install-plugin?repo=benhaotang/my-go-music-plugin-Ampache) 安装，要么在设置中通过本项目 GitHub 地址安装 [https://github.com/benhaotang/my-go-music-plugin-Ampache](https://github.com/benhaotang/my-go-music-plugin-Ampache)

登录需要一个有效的以 `/server/xml.server.php` 结尾的Ampache 音乐服务器的端点（HTTP或HTTPS），用户名和密码。这些内容一般会在你服务器账户控制的地方显示。

例如 NextCloud Music，在其设置中你可以生成专属音乐服务的密码。唯一要指出的是，在填写服务器地址时，要在结尾加上`/server/xml.server.php`，例如在 NextCloud Music 中提示你的地址为 `https://url/apps/music/ampache/`，在本插件中你需要填写`https://url/apps/music/ampache/server/xml.server.php`。

目前已经对 NextCloud Music v3.3.0 和 Mygo Music 0.1.16 版本进行测试。