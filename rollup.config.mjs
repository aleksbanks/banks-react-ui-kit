import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

const requireFile = createRequire(import.meta.url)
const packageJson = requireFile('./package.json')
const dirname = path.dirname(fileURLToPath(import.meta.url))
const stylesPath = path.join(dirname, 'lib/styles.css')

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
				exports: 'named',
				banner: `'use client';\nrequire('./styles.css');`,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
				exports: 'named',
				banner: `'use client';\nimport './styles.css';`,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
				compilerOptions: {
					noEmit: false,
					declaration: false,
					jsx: 'react-jsx',
					noUnusedLocals: false,
				},
			}),
			postcss({
				modules: true,
				extract: stylesPath,
				minimize: true,
				sourceMap: true,
			}),
		],
	},
	{
		input: 'src/index.ts',
		output: [{ file: packageJson.types, format: 'es' }],
		plugins: [dts({ tsconfig: './tsconfig.json' })],
		external: [/\.css$/],
	},
]
