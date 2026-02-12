## Repo: WebAdministrator (Angular 16)

This file gives actionable guidance for AI coding agents working in this repository.

High level
- This is an Angular 16 single-page application scaffolded with Angular CLI.
- Entry points: `src/main.ts`, `src/index.html`, and `src/app/app.module.ts`.
- Pages live under `src/app/pages/` and UI pieces under `src/app/forms/` and `src/app/header/`.
- Services/providers live in `src/app/providers/` and implement API and app logic (e.g., `empresalist.service.ts`, `userlist.service.ts`).

Build & developer workflows
- Use the existing npm scripts in `package.json`:
  - `npm start` -> `ng serve` (dev server on http://localhost:4200)
  - `npm run build` -> production build outputs to `dist/`
  - `npm test` -> runs Karma unit tests
- When adding dependencies, prefer adding to `package.json` and run the usual package manager outside the repo (user runs `npm install`).

Project conventions & patterns
- TypeScript + Angular style: components, services, and modules follow Angular CLI conventions. Generate new artifacts with `ng generate` when possible.
- Services follow a list/service naming pattern (`*list.service.ts`) and are used by pages/components to fetch/manipulate data.
- Forms are organized under `src/app/forms/` and represent reusable modal/dialog forms (e.g., `empresaform`, `marcaform`). Look at `userform` for an example of input handling and validation.
- The `interfaces/` folder contains DTO shapes used across components and services (e.g., `empresa.ts`, `user.ts`, `vehiculo.ts`). Prefer using these interfaces for typed method signatures and component inputs/outputs.

Integration points & external dependencies
- Google Maps JS API: `@googlemaps/js-api-loader` and `@types/google.maps` are present; map-related pages are under `pages/visualize-map` and `pages/config-map`.
- Email: `nodemailer` is present in `dependencies` — verify how it's consumed (likely in a backend or serverless function; front-end should not call SMTP directly).
- PDF viewing: `ng2-pdf-viewer` used in pages that show documents.

Key files to inspect when changing behavior
- `src/app/providers/*` — services that interact with backend endpoints. Modify here to change API calls.
- `src/app/pages/*` — top-level routeable pages. Changes here affect routes and navigation.
- `src/app/app-routing.module.ts` — route configuration and lazy-loaded routes (if any).
- `src/app/app.module.ts` — central module imports (Material modules, FormsModule, HttpClientModule, etc.).

Patterns and gotchas specific to this repo
- Many services include both `.spec.ts` and `.ts` files; tests exist but may be incomplete — run `npm test` to see failing tests.
- Date handling uses `date-fns` and `@angular/material-date-fns-adapter` — when changing date logic, prefer `date-fns` utilities.
- Material version is 16.x — prefer new Material APIs and check breaking changes when upgrading.
- There are multiple `config-*` pages (e.g., `config-vehiculos`, `config-brandeo`) that may share state via services rather than NgRx; look for shared services in `providers/`.

Examples
- To add a new page named `reports`:
  - Run `ng generate component app/pages/reports` then wire a route in `app-routing.module.ts`.
  - Add a service under `src/app/providers/reports.service.ts` if it needs backend access and register it with providedIn root.
- To change an API call in `empresalist.service.ts`:
  - Update the URL and payload shapes. Use interfaces from `src/app/interfaces/` and adjust calling components in `src/app/pages/empresas/`.

Testing & quick validation
- Run `npm start` and open the browser at `http://localhost:4200` for visual verification.
- Run `npm test` to run unit tests. Fix or update `.spec.ts` files when adding new behavior.

When editing files
- Preserve existing file and export names. Many components are referenced by string in templates and routing.
- Keep Angular CLI structure; prefer small, focused commits that update an affected component, its template, styles, and tests together.

If unsure
- Search the `src/app/providers` folder for where data flows start and look at the corresponding page in `src/app/pages` that consumes it.
- For UI behavior examples, open `src/app/forms/userform` and `src/app/header/header.component.ts`.

Contacts & context
- No policy files for AI agents exist in this repo; this file is authoritative for agent behavior. If you need more specifics (API base URLs, environment files), ask the developer to provide `src/environments/*.ts` or CI pipeline details.

Please review and tell me any areas that need more detail (routing, testing patterns, or specific services to document).
