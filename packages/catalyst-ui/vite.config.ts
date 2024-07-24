/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/catalyst-ui',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      // rollupTypes: true,
    }),
  ],

  build: {
    outDir: '../../dist/packages/catalyst-ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: 'src/index.ts',
      },
      name: 'catalyst-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@headlessui/react',
        '@heroicons/react',
        'clsx',
        'framer-motion',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
  },
});
