cp package2.json package.json
yarn version --patch
vim -c "3,4w package.json" -c wq package.json