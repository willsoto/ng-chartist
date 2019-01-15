#!/usr/bin/env bash

set -e

npx standard-version --sign

yarn build

npm publish dist/ng-chartist-lib

git push --follow-tags origin master
