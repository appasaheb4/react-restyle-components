# cp package2.json package.json
# yarn version --patch

# # cjs
# copyfiles -u 1 src/library/assets/svg/*.svg lib/cjs
# copyfiles -u 1 src/core-components/atoms/input/input-otp.styles.css  lib/cjs
# copyfiles -u 1 src/core-components/atoms/input/input.styles.css  lib/cjs

# # esm
# copyfiles -u 1 src/library/assets/svg/*.svg lib/esm
# copyfiles -u 1 src/core-components/atoms/input/input-otp.styles.css  lib/esm
# copyfiles -u 1 src/core-components/atoms/input/input.styles.css  lib/esm

# cp package.json lib/package.json

copyfiles -u 1 src/library/assets/svg/*.svg lib/src
copyfiles -u 1 src/library/assets/fonts/*/*.ttf lib/src
copyfiles -u 1 src/**/*.css lib/src
# npx tailwindcss -c ./tailwind.config.js -i ./src/index.css -o global.css
# cp global.css lib
npx tailwindcss -c ./tailwind.config.js -i ./src/index.css -o ./src/tc.module.css --minify
npx tailwindcss -c ./tailwind.config.js -i ./src/index.css -o ./lib/src/tc.module.css --minify
# tailwindcss -o ./src/tc.module.css
# tailwindcss -o lib/src/tc.module.css --minify
node convert-tailwind-to-css.js
# copyfiles -u 1 ./src/tc.module.css lib/src
cp package.json lib



# when you npm publish then remove react and react-dom to package.json