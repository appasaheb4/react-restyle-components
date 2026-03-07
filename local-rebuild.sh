#!/bin/bash
git submodule update --remote --merge && yarn build

## hard reset and merge
# git submodule foreach 'git reset --hard HEAD'
# git submodule update --remote --merge
# yarn build