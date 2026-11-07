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

## Ending Note

Tested with NextCloud Music v3.3.0 and [MyGo Music](https://github.com/egoist/mygo-music) 0.1.16