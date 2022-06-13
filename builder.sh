#!/usr/bin/env sh

echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./utils && npx yarn build


echo ''
echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../library || return

echo 'Библиотека "app"'
echo '------------------------------------'
cd ./app && npx yarn build && yarn build:types

echo 'Библиотека "design"'
echo '------------------------------------'
cd ../design && npx yarn build && yarn build:types

echo 'Библиотека "kit"'
echo '------------------------------------'
cd ../kit && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo ''
echo 'Пакет "request"'
echo '------------------------------------'
cd ./request && npx yarn build && yarn build:types
echo ''
echo 'Пакет "Dialog"'
echo '------------------------------------'
cd ../dialog && npx yarn build && yarn build:types
echo ''
echo 'Пакет "Errors"'
echo '------------------------------------'
cd ../errors && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка wrappers           |'
echo '------------------------------------'

cd ../../wrappers || return

echo ''
echo 'Пакет "Default"'
echo '------------------------------------'
cd ./default && npx yarn build && yarn build:types

echo ''
echo 'Пакет "Empty"'
echo '------------------------------------'
cd ../empty && npx yarn build && yarn build:types


echo '------------------------------------'
echo '|        Сборка widgets            |'
echo '------------------------------------'

cd ../../widgets || return

echo ''
echo 'Пакет "bucket"'
echo '------------------------------------'
cd ./bucket && npx yarn build && yarn build:types

echo ''
echo 'Пакет "profile"'
echo '------------------------------------'
cd ../profile && npx yarn build && yarn build:types


echo ''
echo '------------------------------------'
echo '|        Сборка modules            |'
echo '------------------------------------'

cd ../../modules || return

echo 'Модуль "main"'
echo '------------------------------------'
cd ./main && npx yarn build && yarn build:types

echo 'Модуль "design"'
echo '------------------------------------'
cd ../design && npx yarn build && yarn build:types

echo 'Модуль "error"'
echo '------------------------------------'
cd ../error && npx yarn build && yarn build:types

echo 'Модуль "kit"'
echo '------------------------------------'
cd ../kit && npx yarn build && yarn build:types

echo 'Модуль "sign-in"'
echo '------------------------------------'
cd ../sign-in && npx yarn build && yarn build:types

exit 0
