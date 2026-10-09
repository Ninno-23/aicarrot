const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const checks = [
  ['HTML document exists', /<!doctype html>/i.test(html)],
  ['Chat endpoint bridge', html.includes("path==='/api/chat/stream'")],
  ['Study tool bridge', html.includes("path.startsWith('/api/study/')")],
  ['Document upload bridge', html.includes("path==='/api/document'")],
  ['Image generation bridge', html.includes("path==='/api/image'")],
  ['Browser token configuration', html.includes('carrot_hf_token_session') && html.includes('Save for this tab')],
  ['No embedded Hugging Face token', !/hf_[A-Za-z0-9]{20,}/.test(html)],
  ['Flashcard UI', html.includes('renderFlashcards')],
  ['Quiz UI', html.includes('renderQuiz')],
  ['PDF extraction via PDF.js', html.includes('pdf.min.mjs')],
  ['DOCX extraction via Mammoth', html.includes('mammoth.browser.min.js')],
  ['Responsive layout', html.includes('@media')],
  ['GitHub Pages relative favicon', html.includes('./static/carrot-logo.svg')],
  ['No Render-only instructions', !html.includes('Open the Render Web Service URL')],
];
let failed = 0;
for (const [name, ok] of checks) { console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`); if (!ok) failed++; }
if (failed) process.exit(1);
