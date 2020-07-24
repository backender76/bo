#!/bin/bash

echo "Инициализация проекта"

cp .env.example .env

npm i > /dev/null
cd client || exit
npm i > /dev/null
cd ../server || exit
npm i > /dev/null
