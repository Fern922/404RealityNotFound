// Rewritten server/index.ts for Vercel

import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const start = Date.now();
  let capturedResponse: any = null;

  const sendResponse = (status: number, body: any) => {
    capturedResponse = body;
    res.status(status).json(body);
    const duration = Date.now() - start;

    let logLine = `${req.method} ${req.url} ${status} in ${duration}ms`;
    if (capturedResponse) {
      logLine += ` :: ${JSON.stringify(capturedResponse)}`;
    }
    if (logLine.length > 80) logLine = logLine.slice(0, 79) + '…';
    console.log(`${new Date().toLocaleTimeString('en-US')} [api] ${logLine}`);
  };

  try {
    // Example route handling logic:
    if (req.url?.startsWith('/api/hello')) {
      return sendResponse(200, { message: 'Hello from Vercel!' });
    }

    // Fallback: Serve static HTML for all other routes (if built)
    const distPath = path.resolve(__dirname, '../public');
    const indexPath = path.resolve(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const html = await fs.promises.readFile(indexPath, 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(html);
    } else {
      return sendResponse(404, { message: 'Not Found' });
    }
  } catch (err: any) {
    return sendResponse(err.statusCode || 500, { message: err.message || 'Internal Server Error' });
  }
}