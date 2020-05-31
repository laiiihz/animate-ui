vue-cli-service build --target lib --name animate-ui ./src/components/index.js
Remove-Item .\template\animate-ui-build\* -Force -Recurse
Copy-Item -r * -Exclude ("node_modules","template") -Destination .\template\animate-ui-build\
cd template
yarn add file:.\animate-ui-build\