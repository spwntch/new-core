/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-ui',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      rollupTypes: true,
    }),
  ],

  build: {
    outDir: '../../dist/packages/react-ui',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: 'src/index.ts',
        shadcn: 'src/lib/components/shadcn-ui/index.ts',
        components: 'src/lib/components/ui/index.ts',
        shell: 'src/lib/components/shell/index.ts',
        articles: 'src/lib/components/articles/index.ts',
        utils: 'src/lib/utils/index.ts',
      },
      name: 'react-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar',
        '@radix-ui/react-context',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-menubar',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'embla-carousel-react',
        'lucide-react',
        'next-themes',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwind-merge',
      ],
    },
  },
});
