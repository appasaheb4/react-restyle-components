cp package2.json package.json
yarn version --patch
sed -n 3,23p package.json>patch
sed -i 18rpatch package.json2