#!/bin/bash
npm i
cd app1
npm i
npm run build
cd ..
cd app2
npm i
npm run build
cd ..
npm start
