import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/sass.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  minify: true
});