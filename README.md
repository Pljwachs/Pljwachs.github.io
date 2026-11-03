# Personal website

A plain HTML, CSS and JavaScript portfolio with three pages: About, Projects and CV. Each project also has a detail page (`project.html?id=...`). There is no build step.

## Preview

Open `index.html` in a browser, or run `python -m http.server` here and visit <http://localhost:8000>.

## Personalise

1. Replace `Your Name` in all three HTML files, then update the bio and contact links in `index.html`.
2. Add your photo as `assets/images/portrait.jpg`.
3. Add your CV as `assets/cv.pdf`.
4. Put project media in `assets/projects/` and edit `js/projects-data.js`. Give each project a unique `id` (used in its detail page address) and, optionally, a `details` list of paragraphs for the longer write-up.

Prefer short, silent MP4 clips to GIFs because they are much smaller. To convert a GIF with ffmpeg:

```sh
ffmpeg -i demo.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" demo.mp4
```

## Deploy to GitHub Pages

1. Create a public repository named `<username>.github.io`, using your GitHub username.
2. Push this folder to its `main` branch.
3. In the repository, go to **Settings > Pages** and set the source to **Deploy from a branch**, `main`, `/ (root)`.

The site then appears at `https://<username>.github.io`.
