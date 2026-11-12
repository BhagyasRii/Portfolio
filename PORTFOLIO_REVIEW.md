# Portfolio review — 12 November 2026

Scope: the main branch at 5b16a1fdda2cfd010af2919ff49ddd9ba74c100d, including index.html, CSS, JavaScript, the full file tree, README and Pages workflow. Project source repositories, the resume PDF contents, external app availability and certificate contents were not inspected.

## Prioritized improvements

| Priority | Evidence in the original files | Improvement | Status |
| --- | --- | --- | --- |
| P0 | index.html lists three screenshots and project titles linking only to Streamlit. No problem statements, source links, evaluation or individual contribution. | Add readable project summaries now. Next add exact source repositories, role, dataset, approach, evaluation, limitations and reproducible setup for each project. | Summaries added; project evidence still needed. |
| P0 | Hero says “I'am” and “AI&ML Enthusiastic”; About describes a student. Resume action is an unlabeled icon. | State current graduate status and interests plainly; make resume, projects and contact easy to find. | Updated using the supplied 2026 graduation information; existing PDF preserved and requires a content review. |
| P1 | styles.css applies padding-left:520px to .cont; project images and titles are separate grid children; seven navigation items compete for space. | Use responsive grouped project cards, fewer navigation choices and project-first order. | Implemented. |
| P1 | Empty href values on education/certificate anchors; empty image alternatives; menu toggle is a div; contact and closing main tag are inside a comment. | Repair document structure, meaningful links, image alternatives, keyboard navigation and contact section. | Implemented. Certificates now link to existing images. |
| P1 | README.md contains only “# Portfolio”; static.yml already deploys on main pushes. | Explain run instructions, paths, deployment and content maintenance. Verify actual Pages deployment and demo availability. | Documentation added; external runtime checks remain. |
| P2 | Broad skills have no project-level evidence; achievements have no profile links. | Link skills and milestone claims to specific code, evaluations and verified profile URLs. | Skills grouped; evidence links still needed. |
| P2 | Page loads Boxicons, Google Fonts and ScrollReveal; CSS and SCSS both exist. | Reduce external dependencies and declare one maintained style source. | Removed runtime CDN dependencies; CSS documented as maintained source, legacy SCSS retained. |

## Most useful next additions

1. For Heart Disease Prediction: dataset source and license, target definition, train/test method, class balance, model comparison, precision/recall or ROC-AUC, leakage checks and intended limitations. Never frame the demo as clinical validation.
2. For Image Compression: an original/result comparison with palette size, image dimensions, measured file-size change and visual tradeoffs. Explain that color reduction does not guarantee a smaller encoded file.
3. For Learning Roadmap Generator: actual model/provider, inputs and outputs, prompt design, failure handling and a sample roadmap. Do not infer these from the project name.
4. Add newer work only after confirming its repository, screenshot, contribution and demonstration. The current Portfolio files contain only the three projects above.
5. Check the resume PDF against current graduation, contact details, project links and role focus. Its existence is confirmed; its contents have not been reviewed.
6. Verify the three demo destinations and Pages URL. A link in HTML proves a configured destination, not uptime.

## Redesign delivered

Order: introduction and resume → selected projects → skills → about and education → credentials → contact.
Theme: ink navy, mint accents, light content areas, large typography and existing project imagery.
No fabricated performance metrics, employment history, new project repositories or certification dates were introduced.
