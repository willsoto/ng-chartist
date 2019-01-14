#!/usr/bin/env bash

set -e

npx standard-version --sign

echo "Copying package.json"

cp ./package.json ./projects/ng-chartist
cp ./README.md ./projects/ng-chartist

yarn build

npm publish dist/ng-chartist-lib

git push --follow-tags origin master
