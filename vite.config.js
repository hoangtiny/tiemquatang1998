import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const fileUploadPlugin = () => ({
  name: 'file-upload',
  configureServer(server) {
    server.middlewares.use('/api/upload', (req, res, next) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            const { filename, data } = JSON.parse(body);
            const base64Data = data.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');
            const dir = path.resolve(__dirname, 'public/anhkhachang');
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            
            const uniqueFilename = `${Date.now()}-${filename.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            fs.writeFileSync(path.join(dir, uniqueFilename), buffer);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, path: `/anhkhachang/${uniqueFilename}` }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), fileUploadPlugin()],
})
