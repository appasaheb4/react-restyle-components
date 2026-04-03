#!/bin/bash
git submodule update --remote --merge && yarn build

## hard reset and merge
# git submodule foreach 'git reset --hard HEAD'
# git submodule update --remote --merge
# yarn build

## force merge
## git submodule foreach 'git fetch origin && git reset --hard FETCH_HEAD' && yarn build