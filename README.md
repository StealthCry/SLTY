# SLTY_VIBE

**Advanced Aim Trainer · Neon Violet Sci-Fi**

SLTY_VIBE is a personal 3D aim-training game project focused on responsive shooting mechanics, polished visuals, useful training modes, meaningful performance analytics, and a distinctive Neon Violet Sci-Fi identity.

> **Project status:** In development. The current baseline is a single-file HTML/JavaScript application using Three.js. The long-term engine and desktop strategy have not yet been selected.

## Current baseline

- Main application: [`CleanerSlty.html`](./CleanerSlty.html)
- Current baseline: the repository copy titled **SLTY Hub // Mega Improve v16 · Внутриигровое радио**
- Rendering library: Three.js r128, currently loaded from a CDN
- Existing training modes: Multi-Target, Flicks, Tracking, and Directional Target
- Local persistence: localStorage and IndexedDB are present in the current code
- Current work should preserve the baseline and use Git history for version tracking

The repository filename convention is intentional: the working game file remains **`CleanerSlty.html`**. Do not create version-suffixed copies such as `CleanerSlty_v17.html`. Use commits, branches, and tags to track versions.

## Goals

- Accurate and responsive aim-training mechanics
- Reliable target spawning, hit detection, raycasting, and input handling
- A polished 3D arena and tactical first-person weapon/hands
- Training modes including Precision, Reaction, and Target Switching
- Useful statistics, progress analysis, and configurable difficulty
- In-game radio, local audio support, and configurable sound
- Local profiles and portable settings/statistics
- Stable performance and a maintainable architecture
- A consistent Neon Violet Sci-Fi visual system

## Visual identity

- **Neon Violet** — primary accent
- **Dark Graphite** — primary environment and surfaces
- **Cyan Blue** — secondary accent
- **Soft Silver** — metallic details

## Running the current prototype

The current baseline is a standalone HTML file that loads Three.js from a CDN. A modern desktop browser is required, and an internet connection is currently needed for the CDN dependency and Google Fonts.

For local development, serve the repository through a local HTTP server rather than assuming every browser API will behave correctly from a `file://` URL. No package manager or build pipeline is defined yet.

## Repository structure

```text
SLTY/
├── CleanerSlty.html              # Current game baseline; keep this filename
├── README.md
├── .gitignore
├── LICENSE                       # Existing Apache-2.0 file; review before changing
├── docs/
│   └── PROJECT_STATUS.md         # Verified baseline notes and audit limits
├── assets/
│   └── references/
│       └── weapons/              # Weapon / hands visual references
└── tests/                        # Automated and manual test assets as tooling is selected
```

The project structure is intentionally lightweight until the engine decision is made. Do not create a large framework or migrate the game before the architecture review.

## Development workflow

- `main` is the stable baseline branch.
- Use short-lived feature or setup branches for changes.
- Keep each commit focused and descriptive.
- Do not modify `CleanerSlty.html` without first reviewing the change and preserving a recoverable baseline.
- Test changes in the actual target runtime; static checks alone do not prove gameplay works.
- Never commit passwords, API keys, access tokens, private credentials, or personal data.

Suggested branch prefixes: `setup/`, `feature/`, `fix/`, `refactor/`, and `docs/`.

## Quality and verification

Report clearly which checks were static, automated, or manually performed in a running game. Do not claim a feature, performance target, or test passed without evidence.

See [`docs/PROJECT_STATUS.md`](./docs/PROJECT_STATUS.md) for the current baseline audit notes.

## License

The repository currently contains an Apache License 2.0 file. Its scope and suitability for the complete project and third-party assets should be reviewed before public distribution. The repository is private; do not assume that private visibility itself changes the legal effect of a license file.
