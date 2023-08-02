import { defineConfig } from 'vite'
//import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react'
import path from 'path'
import rollupReplace from '@rollup/plugin-replace'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    alias: [
      {
        // '@': fileURLToPath(new URL('./src', import.meta.url))
        '@': path.resolve(__dirname, './src'),
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },

  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    }),
    react({ jsxRuntime: 'classic' }),
    viteTsconfigPaths()
    //reactRefresh(),
  ]
})
