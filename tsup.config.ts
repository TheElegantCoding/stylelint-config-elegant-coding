import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [ 'src/index.ts', 'src/sass.ts' ],
  shims: true
});