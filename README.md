# Stride · Food & Movement

A GitHub Pages app for a food-photo journal, portion-based nutrition estimates, exercise entries, weight check-ins, a flexible 16:8 schedule, and a seven-day example eating plan.

## Data and privacy

The website and source are public. Personal entries, profiles and photos are stored in IndexedDB on the visitor's browser; they are never committed to this repository or sent to GitHub for storage. There are no accounts, backend APIs, analytics, or cross-device synchronization. Anyone with access to the same browser profile can open its journal. Clearing browser/site data can remove it.

Use **Download backup** to export settings, entries and photos. Use **Restore backup** on another device to merge new entries and restore settings. Existing entries with matching IDs are kept. Backup files contain personal data; keep them private. No personal measurements are embedded in the public code; set them in the app's profile.

Food images are a visual journal; nutrition estimates use confirmed food portions or entered nutrition-label values. Automatic image recognition is not connected. Example meals are adjustable templates, not personal calorie prescriptions or allergy-filtered recommendations.

## Develop and publish

Requires Node 22.13+ and npm.

```sh
npm ci
npm run dev
npm run build
```

The production build is in `docs/`, with relative URLs suitable for a GitHub Pages project subdirectory. Commit both source changes and rebuilt `docs/` files. Publish `/docs` from the `codex/pages` branch after pushing this source. `.nojekyll` disables Jekyll processing. The old server-dependent version is not included here. GitHub publication is pending: the repository was created, but the app upload was blocked by repeated network and HTTP errors. Only its initial README is currently on GitHub.

Use `npm run preview` to inspect the static production build. Data on localhost and the hosted GitHub Pages origin are separate; use backups to transfer entries.
