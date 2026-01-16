copyfiles -u 1 src/core-components/src/library/assets/svg/*.svg lib/src
copyfiles -u 1 src/core-components/src/library/assets/fonts/*/*.ttf lib/src
copyfiles -u 1 src/core-components/src/**/*.css lib/src
copyfiles -u 1 src/core-components/src/*.css lib/src
copyfiles -u 1 src/core-components/tailwind.config.js lib/src
# Remove plugins section from tailwind.config.js in lib folder using Node.js for reliability
node -e "const fs = require('fs'); const path = 'lib/src/core-components/tailwind.config.js'; let content = fs.readFileSync(path, 'utf8'); content = content.replace(/^  plugins: \[[\s\S]*?^  \],$/m, ''); content = content.replace(/(  corePlugins: \{[^}]*tableLayout: false,\s*\n)(  \}),/m, '\$1  }'); content = content.replace(/^const plugin = require\(['\"]tailwindcss\/plugin['\"]\);?\s*\n/m, ''); fs.writeFileSync(path, content);"


# === ADD THESE CLEANUP COMMANDS ===
# Remove declaration maps
find lib -name "*.d.ts.map" -type f -delete

# Remove test files
find lib -name "*.spec.*" -type f -delete
find lib -name "*.test.*" -type f -delete

# Remove dev files
find lib -name "jest.config.*" -type f -delete
find lib -name "setupTests.*" -type f -delete
find lib -name "reportWebVitals.*" -type f -delete
find lib -name "App.js" -type f -delete
find lib -name "App.d.ts" -type f -delete
find lib -name "App.css" -type f -delete
rm -rf lib/src/core-components/__mocks__

# Newly Added Those Lines for cleaning up the package
# Remove source maps
find lib -name "*.js.map" -type f -delete
find lib -name "*.d.ts.map" -type f -delete

# Remove fonts (use CDN instead to save ~400KB)
rm -rf lib/src/core-components/src/library/assets/fonts

# Remove test data files
find lib -name "*TestData*" -type f -delete

# Remove empty asset directories
find lib -type d -empty -delete

# Remove fontface.css if fonts are removed
rm -f lib/src/core-components/src/assets/styles/fontface.css


# Minify all JS files in lib
# find lib -name "*.js" -type f -exec sh -c '
#   npx esbuild "$1" --minify --outfile="$1" --allow-overwrite
# ' _ {} \;