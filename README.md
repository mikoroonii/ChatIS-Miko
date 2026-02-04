# [![](https://chat.mikoroonii.com/img/Peepo-64x64.png)](https://chat.mikoroonii.com) ChatIS-Miko [![GitHub version](https://img.shields.io/badge/release-v2.5.0-blue)](#) [![Website giambaj.it](https://img.shields.io/website-up-down-green-red/https/chatis.is2511.com.svg)](https://chat.mikoroonii.com/) [![GitHub license](https://img.shields.io/github/license/IS2511/jChat)](LICENSE)

**ChatIS-Miko** is an overlay that allows you to show your Twitch chat on screen with OBS, XSplit,
and any other streaming software that supports browser sources.
It supports your [**BetterTTV**](https://betterttv.com/),
[**FrankerFaceZ**](https://www.frankerfacez.com/) and
[**7TV**](https://7tv.app/) emotes, always at the best available quality.
You can choose to activate a smooth animation, show bots messages and fade old ones after some time.
It comes with many fonts and styling options that can be combined as desired.

## A fork of ChatIS, which is a fork of jChat. Thank you, IS2511 and giambaJ.

### The app is up and running on here: https://chat.mikoroonii.com

## Features
- 7TV, BTTV and FFZ emotes support
- Lots of fonts and styling options, custom fonts
- Twitter emojis
- 7TV, BTTV and FFZ user badges (on/off)
- Smooth animation (on/off)
- Fade old messages (on/off)
- Hide bots messages and user commands (on/off)
- !refreshoverlay to make newly added emotes appear (mods only)
- Custom namepaints (for free!) [Pick yours here.](https://chat.mikoroonii.com/v2/namepaintselector/)



## Commands
All commands start with `!chatis`. 
Example: `!chatis ping`

---

### For Developers

* **ping**: Shows a PONG message. Useful for checking connection status.
* **link**: Displays a link on the screen.

---

### For Moderators

* **reload**: Reloads the entire overlay.
* **refresh**: Refreshes the emote library.
* **hide**: Hides the chatbox.
* **show**: Shows the chatbox.
* **opacity**: Sets the opacity of the chatbox. Example: `!chatis opacity 50` to set the opacity to 50%.

---

### Fun & Media

* **spin**: Spins the chatbox.
* **horsing**: Shows a GIF of a horse.
* **audio [URL]**: Plays an MP3 file from a direct link.
    * Example: `!chatis audio https://example.com/sound.mp3`

#### YouTube Commands
**Usage:** `!chatis yt [VideoID]` or `!chatis rickroll`

| Flag | Description |
| :--- | :--- |
| -m | Mute audio |
| -h | Hide video (audio only) |
| -w [number] | Set width in pixels |
| -h [number] | Set height in pixels |