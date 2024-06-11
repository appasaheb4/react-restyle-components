cp package2.json package.json
yarn version --patch
sed -i 18r<(sed '3,23!d' package.json) package2.json
