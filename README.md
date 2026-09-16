# ProPresenter Presentation Card

`custom:propresenter-presentation` is the companion dashboard card for the
Home Assistant [ProPresenter integration](https://github.com/media-dotcom/ha-propresenter-reliable-browser).
It renders the changing slide collection as one responsive grid instead of
creating Home Assistant entities for individual slides.

## Install with HACS

Add this repository as a HACS Dashboard repository, or install the release
asset `dist/propresenter-presentation.js` as a Dashboard plugin. Add the card
resource at `/hacsfiles/lovelace-propresenter-presentation/propresenter-presentation.js`
if HACS does not add it automatically.

The integration must be installed at version `0.7.0` or later. Choose the
`Active presentation` sensor and the ProPresenter `Media Player` entity in the
visual editor. When a video is playing or paused, the card shows a compact
playback header with a Spotify-style icon toggle and a seek scrubber. These use
the media player entity's standard Home Assistant play, pause, and seek
services. Configure the grid, thumbnail quality, labels, notes, read-only mode,
confirmation, and live following behavior there. The slide browser scrolls inside the card by
default, so other cards on a tablet dashboard remain in place. Adjust
`browser_height` in pixels or set `internal_scroll: false` if you prefer the
dashboard to grow normally.

The card obtains short-lived signed paths from Home Assistant for thumbnails;
no ProPresenter or Home Assistant token belongs in the card configuration.
Choosing a playlist item first loads its slides without changing ProPresenter's
live output. Press **Enter** to trigger that selected item explicitly; the
card sends the playlist revision and stable item key so stale selections are
rejected. The **Live** button returns to the active presentation. Read-only mode
removes the live-switch and slide-trigger controls.

## Development

```sh
npm install
npm run typecheck
npm test
npm run build
```

The built HACS asset is `dist/propresenter-presentation.js`.
