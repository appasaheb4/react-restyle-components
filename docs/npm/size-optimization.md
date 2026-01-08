# NPM Package Size Optimization

This document tracks all changes made to reduce the npm package unpacked size.

## Problem

Initial unpacked size was **1.93 MB** → Target is under **500KB**.

---

## Progress Timeline

| Phase   | Size   | Date         | Changes Made                  |
| ------- | ------ | ------------ | ----------------------------- |
| Initial | 1.93MB | -            | Original package              |
| Phase 1 | 1.7MB  | January 2026 | Basic cleanup                 |
| Phase 2 | 1.3MB  | January 2026 | Remove fonts, maps, test data |
| Phase 3 | ~800KB | January 2026 | Remove utils, minification    |

---

# Phase 1: Basic Cleanup

### 1.1 `tsconfig.json` - Disable Declaration Maps

**Location:** `/react-restyle-components/tsconfig.json`

**Change:** Line 19

```json
// Before
"declarationMap": true,

// After
"declarationMap": false,
```

**Reason:** Declaration maps (`.d.ts.map` files) are only needed for debugging TypeScript types. They add ~100-200KB to the package.

**Savings:** ~100-200KB

---

### 1.2 `.npmignore` - Exclude Additional Files

**Location:** `/react-restyle-components/.npmignore`

**Added entries:**

```text
*.tgz
*.d.ts.map
*.js.map
```

**Reason:** Exclude build artifacts and map files from npm package.

---

# Phase 2: Remove Unnecessary Files

### 2.1 `npm-publish.sh` - Remove Source Maps & Declaration Maps

**Location:** `/react-restyle-components/npm-publish.sh`

```bash
# Remove declaration maps
find lib -name "*.d.ts.map" -type f -delete

# Remove source maps
find lib -name "*.js.map" -type f -delete
```

**Savings:** ~100KB

---

### 2.2 Remove Test Files

```bash
# Remove test files
find lib -name "*.spec.*" -type f -delete
find lib -name "*.test.*" -type f -delete

# Remove test data files
find lib -name "*TestData*" -type f -delete
```

**Savings:** ~20KB

---

### 2.3 Remove Development Files

```bash
# Remove dev files
find lib -name "jest.config.*" -type f -delete
find lib -name "setupTests.*" -type f -delete
find lib -name "reportWebVitals.*" -type f -delete
find lib -name "App.js" -type f -delete
find lib -name "App.d.ts" -type f -delete
find lib -name "App.css" -type f -delete
rm -rf lib/src/core-components/__mocks__
```

**Savings:** ~10KB

---

### 2.4 Remove Font Files (Use CDN Instead)

```bash
# Remove fonts (use CDN instead to save ~400KB)
rm -rf lib/src/core-components/src/library/assets/fonts

# Remove fontface.css if fonts are removed
rm -f lib/src/core-components/src/assets/styles/fontface.css
```

**Savings:** ~400KB

**Alternative:** Load fonts from Google Fonts CDN in your app:

```css
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@400;700&display=swap');
```

---

# Phase 3: Advanced Optimization

### 3.1 Remove Storybook Utilities

```bash
# Remove storybook utilities (not needed in production)
rm -rf lib/src/core-components/src/utils/stories
```

**Reason:** These utilities are only used for Storybook development, not in production.

**Savings:** ~20KB

---

### 3.2 Remove Testing Utilities

```bash
# Remove testing utilities (not needed in production)
rm -rf lib/src/core-components/src/utils/testing
```

**Reason:** Testing utilities should not be in the published package.

**Savings:** ~10KB

---

### 3.3 Remove Tailwind Config

```bash
# Remove tailwind.config.js (users should use their own)
rm -f lib/src/core-components/tailwind.config.js
```

**Reason:** Users should use their own tailwind configuration in their projects.

**Savings:** ~5KB

---

### 3.4 Clean Up Empty Directories

```bash
# Remove empty asset directories
find lib -type d -empty -delete
```

---

### 3.5 Minify JavaScript Files (Biggest Impact!)

```bash
# Minify all JS files in lib using esbuild
find lib -name "*.js" -type f -exec sh -c '
  npx esbuild "$1" --minify --outfile="$1" --allow-overwrite
' _ {} \;
```

**Prerequisite:** Install esbuild

```bash
npm install -D esbuild
```

**Savings:** ~400-500KB (reduces JS files by 50-60%)

---

## Size Reduction Summary

| Phase   | Optimization             | Estimated Savings |
| ------- | ------------------------ | ----------------- |
| Phase 1 | Disable declaration maps | ~100-200KB        |
| Phase 2 | Remove source maps       | ~100KB            |
| Phase 2 | Remove test files        | ~20KB             |
| Phase 2 | Remove dev files         | ~10KB             |
| Phase 2 | Remove font files        | ~400KB            |
| Phase 3 | Remove storybook utils   | ~20KB             |
| Phase 3 | Remove testing utils     | ~10KB             |
| Phase 3 | Remove tailwind config   | ~5KB              |
| Phase 3 | **Minify JS files**      | **~400-500KB**    |
| **-**   | **Total Savings**        | **~1.0-1.2MB**    |

---

## Commands to Check Package Size

```bash
# Check what will be published
npm pack --dry-run

# Check actual package size
npm pack
# Look for "unpacked size" in output

# List files in package
tar -tzf react-restyle-components-*.tgz

# Check size of lib folder
du -sh lib/
```

---

## Full `npm-publish.sh` Script

```bash
# Copy assets
copyfiles -u 1 src/core-components/src/library/assets/svg/*.svg lib/src
copyfiles -u 1 src/core-components/src/**/*.css lib/src
copyfiles -u 1 src/core-components/src/*.css lib/src

# === PHASE 2: CLEANUP ===

# Remove declaration maps
find lib -name "*.d.ts.map" -type f -delete

# Remove source maps
find lib -name "*.js.map" -type f -delete

# Remove test files
find lib -name "*.spec.*" -type f -delete
find lib -name "*.test.*" -type f -delete
find lib -name "*TestData*" -type f -delete

# Remove dev files
find lib -name "jest.config.*" -type f -delete
find lib -name "setupTests.*" -type f -delete
find lib -name "reportWebVitals.*" -type f -delete
find lib -name "App.js" -type f -delete
find lib -name "App.d.ts" -type f -delete
find lib -name "App.css" -type f -delete
rm -rf lib/src/core-components/__mocks__

# Remove fonts (use CDN instead)
rm -rf lib/src/core-components/src/library/assets/fonts
rm -f lib/src/core-components/src/assets/styles/fontface.css

# === PHASE 3: ADVANCED ===

# Remove storybook utilities
rm -rf lib/src/core-components/src/utils/stories

# Remove testing utilities
rm -rf lib/src/core-components/src/utils/testing

# Remove tailwind config
rm -f lib/src/core-components/tailwind.config.js

# Remove empty directories
find lib -type d -empty -delete

# Minify all JS files
find lib -name "*.js" -type f -exec sh -c '
  npx esbuild "$1" --minify --outfile="$1" --allow-overwrite
' _ {} \;
```

---

## Related Files

| File             | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `tsconfig.json`  | TypeScript configuration                    |
| `npm-publish.sh` | Build cleanup script                        |
| `.npmignore`     | Files to exclude from npm                   |
| `package.json`   | Package configuration (`"files": ["/lib"]`) |

---

## Future Optimizations (Optional)

### Use a Bundler (Rollup) for Even Smaller Size

For maximum size reduction, consider bundling instead of individual files:

```bash
npm install -D rollup @rollup/plugin-typescript @rollup/plugin-terser
```

Benefits:

- Tree shaking (removes unused code)
- Single bundle file instead of 400+ files
- Better compression

---

_Last updated: January 2026_
