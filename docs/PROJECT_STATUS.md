# SLTY_VIBE — baseline status

**Repository:** `StealthCry/SLTY`  
**Baseline file:** `CleanerSlty.html`  
**Baseline branch at preparation:** `main`  
**Audit type:** static source inspection; no claim of browser-runtime verification.

## Verified repository facts

- The root game file is named `CleanerSlty.html`.
- Its HTML title is `SLTY Hub // Mega Improve v16 · Внутриигровое радио`.
- The inspected file contains 3,933 lines.
- It loads Three.js r128 from cdnjs.
- It has one large inline JavaScript block and one external Three.js script tag.
- 267 HTML IDs were found; no duplicate IDs were detected by the static scan.
- localStorage and IndexedDB references are present.
- Pointer Lock and Fullscreen event handling are present.
- A `visibilitychange` handler was not found by the scan.
- Existing mode identifiers found: `gridshot`, `flick`, `tracking`, and `directional`.
- `StatsManager` and statistics-rendering code are present.
- Built-in procedural audio entries and a radio-station catalog are present. Actual stream reachability, playback, metadata, licensing, and CORS behavior have not been verified.
- Three WebP images are stored under `assets/references/concept-examples/`. They are temporary visual examples of the desired weapon / first-person-hands direction, not final game-ready assets. Their original binary blobs were moved without re-encoding.

## Known audit limits

This is a static inspection of source text. It does **not** establish that:
- the game starts successfully in a browser;
- every existing mode behaves correctly;
- hit detection and target placement are correct at runtime;
- audio streams are reachable or playable;
- the game meets any particular FPS or latency target;
- the application has been tested on different hardware or browsers.

A previous Node.js syntax check of the inline JavaScript passed, but that is not a browser integration test.

## Existing architecture observations

- The application is currently a single HTML file with a large inline JavaScript codebase.
- Three.js r128 is loaded from a CDN.
- The code uses global functions and shared state rather than a modular application architecture.
- Browser storage is used for local persistence.
- The code contains adaptive quality / pixel-ratio logic.
- Local profile and password-hash-related code exists; this must not be described as server-side authentication or cloud account security.

## Features requested but requiring implementation or verification

- Precision mode.
- A distinct Reaction training mode.
- Target Switching mode.
- Improved weapon and first-person hands based on the supplied visual reference.
- Verified real internet-radio streams with robust error handling.
- Full runtime QA for Pointer Lock, fullscreen, pause/resume, visibility changes, target hitboxes, and statistics.

## Next audit tasks

1. Run the baseline in a controlled browser environment.
2. Capture runtime errors and inspect browser compatibility.
3. Measure frame time and performance on a documented machine.
4. Verify every existing mode and its statistics.
5. Verify radio stream URLs, playback, CORS, metadata, and rights/terms.
6. Compare Three.js, Godot, Unity, and Rust/Bevy against measured project needs.
7. Approve an architecture and migration plan before large-scale rewrites.
