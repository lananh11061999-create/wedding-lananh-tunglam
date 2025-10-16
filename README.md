# Wedding invite - Lan Anh & Tùng Lâm (updated)

This Next.js sample wedding invitation site has been updated per your requests.

## What I updated
- Timeline updated to:
  - 12/2022 — Quen nhau
  - 08/2023 — Yêu nhau
  - 10/2023 — Yêu xa
  - 09/2025 — Yêu gần lại
  - 12/2025 — Đám cưới
- Added 4 placeholder pastel images in `/public/images/` (hero-bg.jpg, photo1.jpg, photo2.jpg, photo3.jpg)
- Added a short placeholder music `/public/music/musictheme.wav` (4 seconds sine tone) that the site will try to autoplay on load.
- RSVP: includes a working basic form (posts to getform.io placeholder) and a Google Form iframe placeholder. Replace the iframe `src` with your Google Form embed link when ready.

## Notes on music
You provided a ZingMP3 link. Zing does not allow hotlinking from other sites.
To use the exact song:
- Download the MP3 file (if you have the right to) and place it at `/public/music/musictheme.wav` (or update `components/MusicControl.js` audio `src` to the exact file name or external URL).
- Browsers (especially on mobile) may block autoplay until the user interacts with the page. The site will attempt autoplay on load.

## How to run
1. `npm install`
2. `npm run dev`
3. Visit http://localhost:3000

## Deploy to Vercel
Push to GitHub and import the repo in Vercel. Vercel auto-detects Next.js.

