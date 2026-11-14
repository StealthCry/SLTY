# Contributing to SLTY_VIBE

Thanks for your interest in SLTY_VIBE.

## Project boundaries

- The current game baseline is `CleanerSlty.html`.
- Keep this exact filename. Track versions with Git commits, branches, and tags; do not add version-suffixed copies.
- Do not rewrite or replace the game baseline as part of unrelated repository maintenance.
- The images under `assets/references/concept-examples/` are visual references, not production game assets.
- Do not add credentials, personal data, generated build output, or unlicensed third-party assets.

## Workflow

1. Start from the latest `main`.
2. Create a focused branch using one of these prefixes: `feature/`, `fix/`, `refactor/`, `docs/`, or `chore/`.
3. Keep each change small and explain its purpose in the commit message.
4. Open a pull request into `main`.
5. Wait for the repository validation workflow to pass.
6. Review the complete diff before merging.

## Testing

- Run the lightweight validation workflow for changes to the repository.
- For gameplay changes, also test the game in a real desktop browser.
- Static syntax validation does not prove that gameplay, rendering, audio, input, or performance works correctly.
- Describe exactly which checks were run; do not claim unperformed runtime tests.

## Pull requests

Include:
- What changed and why.
- Which files are affected.
- How the change was tested.
- Any known limitations or follow-up work.

Avoid mixing gameplay changes, asset imports, and repository maintenance in one pull request.
