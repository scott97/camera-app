import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;
const publicdir = '../server/public';

export default {
	input: 'main.js',
	output: {
		//sourcemap: dev,
		sourcemap: false,
		format: 'iife',
		name: 'app',
		file: publicdir + '/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when in dev
			dev: dev,
			// Compile CSS
			css: css => {
				css.write(publicdir + '/bundle.css');
			}
		}),

		// For external dependencies installed from npm
		resolve(),
		commonjs(),

		// Watch the public directory 
		dev && livereload(publicdir),

		// Minify
		!dev && terser()
	],
	watch: {
		clearScreen: false
	}
};
