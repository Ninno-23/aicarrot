# Carrot AI — GitHub Pages Edition

A static, browser-only edition of Carrot AI. It does not require Flask, Render, a Python server, or build commands.

## Publish with GitHub Pages

1. Create/open your GitHub repository.
2. Upload the **contents of this folder** to the repository root (not the parent folder).
3. Commit the files to your default branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose your default branch and `/ (root)`, then Save.
6. Wait for the Pages deployment and open the published URL.

There is no build command. The entry point is `index.html`.

## Connect AI

1. Create or use a Hugging Face access token with permission to use Inference Providers.
2. Open Carrot AI and click the **?** button in the top-right.
3. Paste the token, confirm the chat model and image model, then choose **Save for this tab**.
4. Try a short chat message, then test Flashcards, Summary, Quiz, document upload, and Image separately.

Suggested starting models:
- Chat: `openai/gpt-oss-120b:fastest`
- Image: `black-forest-labs/FLUX.1-dev`

Model access, provider quotas, billing, and endpoint availability are controlled by Hugging Face and may change. If a model is unavailable to your account, select another model that your token can access.

## Privacy and security

- This is a **static site**. Any AI request from the browser sends your token to Hugging Face directly.
- The token is kept in `sessionStorage` for the current browser tab and is not embedded in the repository or stored in chat history. Closing the tab normally clears it; use **Clear token** before leaving a shared computer.
- Never commit an API token to GitHub, even in a private repository. Rotate any token that was previously posted publicly or shared unintentionally.
- Because this version has no private backend, it cannot hide a token from the browser session that uses it. For a public multi-user app, use a secured backend instead.

## Features

- AI chat with conversation history stored locally in the browser
- PDF text extraction (selectable-text PDFs), DOCX and plain-text/code uploads
- AI summaries, flashcards, and multiple-choice quizzes
- Image generation through the configured Hugging Face inference model
- Dark mode, responsive layout, chat export, stop control, and saved conversations
- Search opens an external DuckDuckGo results page; it does not scrape search results in-browser

Scanned/image-only PDFs require OCR and are not converted to text by this static edition. Third-party libraries are loaded from CDNs, so the browser needs an internet connection. Browser extensions, network restrictions, provider CORS policy, model permissions, and quotas can affect requests; errors are displayed rather than pretending a feature succeeded.

## Test locally

Open `index.html` in a modern browser for a quick UI check, or use any static server. No dependencies need to be installed. Run `node smoke-check.js` for source checks.
