#!/usr/bin/env bash

./node_modules/.bin/jade -P $(pwd)/*.jade
./node_modules/.bin/riot --template jade $(pwd)/tags $(pwd)/dist
./node_modules/.bin/stylus -c --use $(pwd)/node_modules/nib $(pwd)/static/css/style.styl