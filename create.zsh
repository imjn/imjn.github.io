#!/bin/zsh

# Get the current date in YYYY-MM-DD format
DISPLAY_DATE=$(date +%Y-%m-%d)
DATE=$(date +%Y%m%d)
FILENAME="./posts/${DATE}-xx.md"

# Create the posts directory if it doesn't exist
if [ ! -d "./posts" ]; then
  mkdir ./posts
fi

# Create the content of the file
cat <<EOF > $FILENAME
---
title: ''
date: '$DISPLAY_DATE'
draft: true
thumbnail: ''
description: ''
---
EOF

echo "File created: $FILENAME"

# Open the file in Visual Studio Code
/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code $FILENAME
