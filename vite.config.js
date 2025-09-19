import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  define: {
    'process.env': {}
  }
  ,
  configureServer(server) {
    // Serve pre-compressed .br files from public with proper headers
    server.middlewares.use((req, res, next) => {
      try {
        if (!req.url) return next();
        const url = req.url.split('?')[0];
        if (url.endsWith('.br')) {
          // map URL to public folder
          const publicPath = path.join(process.cwd(), 'public', url.replace(/^\//, ''));
          if (fs.existsSync(publicPath)) {
            const ext = path.extname(url.replace('.br', ''));
            // set headers
            res.setHeader('Content-Encoding', 'br');
            if (ext === '.js') res.setHeader('Content-Type', 'application/javascript');
            else if (ext === '.wasm') res.setHeader('Content-Type', 'application/wasm');
            else if (ext === '.data') res.setHeader('Content-Type', 'application/octet-stream');
            else res.setHeader('Content-Type', 'application/octet-stream');
            const stream = fs.createReadStream(publicPath);
            stream.pipe(res);
            return;
          }
        }
      } catch (e) {
        // continue to next middleware
      }
      next();
    });
  }
})
