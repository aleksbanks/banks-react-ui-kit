import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module'
const requireFile = createRequire(import.meta.url)
const packageJson = requireFile('./package.json')

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
				exports: 'named',
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
				exports: 'named',
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				exclude: ['src/**/*.stories.(tsx|ts)'],
			}),
			postcss({
				modules: true,
				extract: true,
				minimize: true,
				sourceMap: true,
			}),
		],
	},
	{
		input: 'lib/index.d.ts',
		output: [{ file: 'lib/index.d.ts', format: 'es' }],
		plugins: [dts()],
	},
]
