import * as esbuild from 'esbuild';

const result = await esbuild.build({
  entryPoints: ['./src/index'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  format: 'esm',
  packages: 'external',
});

console.log(result);
