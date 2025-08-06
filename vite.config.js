import { defineConfig } from 'vite';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    plugins: [
      SortCss({
        sort: 'mobile-first',
      }),
    ],
    server: {
      open: true,
    },
  };
});
