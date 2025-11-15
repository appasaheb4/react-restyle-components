copyfiles -u 1 src/core-components/src/library/assets/svg/*.svg lib/src
copyfiles -u 1 src/core-components/src/library/assets/fonts/*/*.ttf lib/src
copyfiles -u 1 src/core-components/src/**/*.css lib/src
copyfiles -u 1 src/core-components/src/*.css lib/src
copyfiles -u 1 src/core-components/tailwind.config.js lib/src
# Remove plugins section from tailwind.config.js in lib folder using Node.js for reliability
node -e "const fs = require('fs'); const path = 'lib/src/core-components/tailwind.config.js'; let content = fs.readFileSync(path, 'utf8'); content = content.replace(/^  plugins: \[[\s\S]*?^  \],$/m, ''); content = content.replace(/(  corePlugins: \{[^}]*tableLayout: false,\s*\n)(  \}),/m, '\$1  }'); content = content.replace(/^const plugin = require\(['\"]tailwindcss\/plugin['\"]\);?\s*\n/m, ''); fs.writeFileSync(path, content);"
# cp package.json lib
