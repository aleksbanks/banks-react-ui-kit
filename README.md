# banks-ui-kit

React UI component library. **0.x** — the API may still change.

## Install

```bash
npm install banks-ui-kit
```

Peer dependency: **React 18+**.

## Usage

Styles load with the package. You can still import them yourself if the bundler does not pick up CSS from `node_modules`:

```ts
import { Button, Checkbox } from 'banks-ui-kit'
// optional: import 'banks-ui-kit/styles.css'
```

```tsx
export function Example() {
	return (
		<>
			<Button label='Save' onClick={() => undefined} />
			<Checkbox label='Remember me' />
		</>
	)
}
```

In Next.js App Router the package is a Client Component (`"use client"`). If CSS does not apply, add `banks-ui-kit` to `transpilePackages` and/or import `banks-ui-kit/styles.css` in `app/layout.tsx`.

### Alerts

```tsx
import { AlertsContextProvider, useAlerts } from 'banks-ui-kit'

function Page() {
	const { addSuccessAlert } = useAlerts()

	return (
		<button type='button' onClick={() => addSuccessAlert('Saved')}>
			Notify
		</button>
	)
}

export function App() {
	return (
		<AlertsContextProvider>
			<Page />
		</AlertsContextProvider>
	)
}
```

`useAlerts` throws if it is used outside the provider.

## Scripts

```bash
npm run storybook    # component explorer
npm run typecheck
npm run lint
npm run build        # CJS, ESM, types, CSS
```
