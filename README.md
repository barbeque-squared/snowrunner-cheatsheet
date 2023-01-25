I just needed a really simple cheatsheet.
Couldn't really find anything, so I made one myself in plain HTML/CSS/JS.

A live version is available at https://barbeque-squared.github.io/snowrunner-cheatsheet/.

Sources:
- icons: white from the game (license unknown, but Sabre please don't hate me for using them here kthx), black is just the grayscale channel inverted
- tyre info: https://docs.google.com/spreadsheets/d/1ehuLHwbmA5ktr0ZC_gv52H3fkz3qxJY_i_uS7Gh0xRU/edit

Everything else is mostly just ingame information or some other personal notes.
This isn't a complete walkthrough, it just makes certain information less annoying to look up.

In terms of license:
- see the above explicitly mentioned sources
- for everything else, probably MIT so you can't blatantly copy it and claim it as your own. Additionally, you can't make money off it. Basically: feel free to share it among friends, but I better not see this in some monetized walkthrough. A non-monetized walkthrough with credit is fine though.

# Development
The files in the `regions` folder deliberately have weird extensions.
Because they are actually valid HTML, so editors will work with it, we just happen to interpret them as Javascript.

## Adding icons
To add new icons to the game:
- from `$INSTALLATION_FOLDER/preload/paks/client`, extract the `gfx.pak`
- go to the `[textures]/ui/flash_auto` folder
- use QCPCT to open the various `.pct` files. You'll probably want `icons_lib_7a` but this might change in the future
- once you've found the correct one, export it to tga (or dds)
- with a proper image editor, extract the icon you want and add it to the `img-white` folder as png. They're usually 24x24, but higher also works.
- `convert img-white/my-icon.png -channel RGB -negate img-black/my-icon.png`
