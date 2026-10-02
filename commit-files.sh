#!/bin/bash

# Get the list of changed files (excluding deleted ones)
files=$(git status --porcelain | grep -E '^[AM] ' | awk '{print $2}')

# Check if there are any changes
if [ -z "$files" ]; then
  echo "No changes to commit."
  exit 0
fi

# Commit file-by-file
for file in $files; do
  echo "Committing $file..."
  git add "$file"
  git commit -m "Update $file"
done

# Push the changes to the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
git push origin "$current_branch"

echo "✅ All files committed and pushed individually."
