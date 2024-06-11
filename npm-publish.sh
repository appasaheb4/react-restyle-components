cp package2.json package.json
yarn version --patch

# cjs
copyfiles -u 1 src/library/assets/**/* lib/cjs
copyfiles -u 1 src/core-components/atoms/input/input-otp.styles.css  lib/cjs
copyfiles -u 1 src/core-components/atoms/input/input.styles.css  lib/cjs

# esm
copyfiles -u 1 src/library/assets/**/* lib/esm
copyfiles -u 1 src/core-components/atoms/input/input-otp.styles.css  lib/esm
copyfiles -u 1 src/core-components/atoms/input/input.styles.css  lib/esm

cp package.json lib/package.json
