# Bhagya Sree · AI & ML Portfolio

A responsive, project-first portfolio built with HTML, CSS and vanilla JavaScript. The navy and teal theme uses system fonts and local assets; no package installation, CDN scripts or build step is required.

## Structure

- `index.html`: introduction, projects, skills, education, credentials and contact.
- `assets/css/styles.css`: maintained styling and responsive layouts.
- `assets/js/main.js`: accessible mobile navigation and footer year.
- `assets/img/`: portrait, application screenshots and certificates.
- `assets/pdfs/BhagyaSree_Resume.pdf`: downloadable resume.
- `.github/workflows/static.yml`: existing GitHub Pages deployment.
- `PORTFOLIO_REVIEW.md`: prioritized content and maintenance improvements.
- `assets/scss/styles.scss`: legacy template source, not used by the page. Edit the CSS directly.

## Run locally

From the repository root, run:

```sh
python -m http.server 8000
```

Then open http://localhost:8000. Check both a desktop viewport and a narrow mobile viewport.

## Deployment

The existing Pages workflow uploads the repository and deploys on pushes to `main`, or a manual workflow dispatch. In repository Settings → Pages, confirm GitHub Actions is selected as the source. The workflow reports the actual deployment URL; do not assume a successful deployment from source changes alone.

## Content updates

Keep resume, LinkedIn and portfolio details consistent. Replace the resume at its existing path when it changes. The portfolio includes six additional repository-linked projects (AI Quality Lab, AI Meeting Assistant, ChoreoMate, Medical Imaging Platform, Subtitle Translator and EmpowerCraft), followed by the three original Streamlit applications. New descriptions are based on their current repository READMEs and, for EmpowerCraft, its Flask application. Source links do not imply a hosted demo or a successful runtime check. The three original Streamlit destinations are preserved; availability has not been verified. Add exact project repository URLs only after confirming them. Do not add model metrics without a reproducible evaluation and dataset description.

## Accessibility and behavior

Semantic landmarks, a skip link, descriptive image text, visible keyboard focus, reduced-motion support and a native button for mobile navigation are included. Navigation and all content remain available when JavaScript is disabled. Certificate links open the existing local evidence files. Contact uses email links rather than a form with no backend.
