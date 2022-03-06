#!/usr/bin/env bash

rm -rf build dist
yarn run-p --print-label build:*
mkdir -p dist/client
cp -R build/* dist/client/
rm -rf build
