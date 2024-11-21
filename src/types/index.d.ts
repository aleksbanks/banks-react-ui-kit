declare module '*.module.css' {
	const content: Record<string, string>
	export default content
}

interface SvgReactComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
	const svgUrl: string
	const svgComponent: SvgrComponent
	export default svgUrl
	export { svgComponent as ReactComponent }
}
