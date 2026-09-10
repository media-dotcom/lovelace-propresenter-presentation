# ProPresenter Presentation Card

`custom:propresenter-presentation` is the companion dashboard card for the
Home Assistant [ProPresenter integration](https://github.com/BenJamesAndo/ha-propresenter).
It renders the changing slide collection as one responsive grid instead of
creating Home Assistant entities for individual slides.

## Install with HACS

Add this repository as a HACS Dashboard repository, or install the release
asset `dist/propresenter-presentation.js` as a Dashboard plugin. Add the card
resource at `/hacsfiles/lovelace-propresenter-presentation/propresenter-presentation.js`
if HACS does not add it automatically.

The integration must be installed at version `0.5.0` or later. Choose the
`Active presentation` sensor in the visual editor and configure the grid,
thumbnail quality, labels, notes, read-only mode, confirmation, and live
following behavior there.

The card obtains short-lived signed paths from Home Assistant for thumbnails;
no ProPresenter or Home Assistant token belongs in the card configuration.

## Development

```sh
npm install
npm run typecheck
npm test
npm run build
```

The built HACS asset is `dist/propresenter-presentation.js`.
