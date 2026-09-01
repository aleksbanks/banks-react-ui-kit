# Changelog

## 0.1.0

First packaged release. The API may still change; this is not a stable 1.x.

### Package
- Builds to `lib/`: CJS, ESM, TypeScript types, `styles.css`
- Importing `banks-ui-kit` loads styles; `banks-ui-kit/styles.css` is also a public entry
- Marked `"use client"` for Next.js App Router
- Peer dependency: React 18+

### Components
- `Alert` — toast; `closable`, optional click-away, auto-hide, Escape
- `Button` — `label`, `loading`, `startIcon` / `endIcon`
- `Checkbox` — `checked` / `defaultChecked`, `indeterminate`, optional label
- `RadioButton`, `RadioGroup`
- `Toggle`
- `Tag` — badge, or a toggle chip when `onClick` is passed
- `Typography` — `h1`–`h3` and body variants; `as` to change the HTML tag
- `Spinner`, `DotsLoader`
- `RequiredIcon`

### Hooks
- `AlertsContextProvider` + `useAlerts` (`addAlert`, `addErrorAlert`, `addSuccessAlert`, `addErrorsAlert`)
