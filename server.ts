import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// For traditional multi-page apps, we serve .html files directly
// But we can also set up a fallback to index.html if needed
// However, the user wants multiple pages, so they should be accessible at /pages/x.html

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
