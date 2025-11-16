#!/bin/bash

# Update submodules, version, build, and publish
git submodule update --remote --merge && yarn version --patch && yarn build && yarn build-storybook && yarn deploy-storybook && npm publish

# # Stage all changes
# git add .

# # Generate dynamic commit message based on changed files
# CHANGED_FILES=$(git diff --cached --name-only)
# if [ -z "$CHANGED_FILES" ]; then
#   echo "No changes to commit"
#   exit 0
# fi

# # Extract meaningful information from changed files
# MESSAGE_PARTS=()
# if echo "$CHANGED_FILES" | grep -qE "\.(tsx|ts)$"; then
#   # Check if component files changed
#   if echo "$CHANGED_FILES" | grep -qE "(components|Components)"; then
#     MESSAGE_PARTS+=("components")
#   fi
#   # Check if utility files changed
#   if echo "$CHANGED_FILES" | grep -qE "(utils|helpers|Utils|Helpers)"; then
#     MESSAGE_PARTS+=("utils")
#   fi
# fi
# if echo "$CHANGED_FILES" | grep -q "package\.json"; then
#   MESSAGE_PARTS+=("dependencies")
# fi
# if echo "$CHANGED_FILES" | grep -qE "\.json$" && ! echo "$CHANGED_FILES" | grep -q "package\.json"; then
#   MESSAGE_PARTS+=("config")
# fi
# if echo "$CHANGED_FILES" | grep -qE "\.(css|scss|less)$"; then
#   MESSAGE_PARTS+=("styles")
# fi
# if echo "$CHANGED_FILES" | grep -qE "(storybook|Storybook)"; then
#   MESSAGE_PARTS+=("storybook")
# fi

# # Create commit message
# if [ ${#MESSAGE_PARTS[@]} -gt 0 ]; then
#   COMMIT_MSG="deploy: update $(IFS=','; echo "${MESSAGE_PARTS[*]}")"
# else
#   COMMIT_MSG="deploy: update files"
# fi

# # Add file count for more context
# FILE_COUNT=$(echo "$CHANGED_FILES" | wc -l | tr -d ' ')
# if [ "$FILE_COUNT" -gt 1 ]; then
#   COMMIT_MSG="$COMMIT_MSG ($FILE_COUNT files)"
# fi

# # Commit and push
# git commit -m "$COMMIT_MSG" && git push