const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
    './dist/custom-element/runtime-es5.js',
    './dist/custom-element/runtime-es2015.js',
    './dist/custom-element/polyfills-es5.js',
    './dist/custom-element/polyfills-es2015.js',
    './dist/custom-element/main-es5.js',
    './dist/custom-element/main-es2015.js',

]
await fs.ensureDir('elements')
await concat(files, 'elements/analytics-counter.js');
//await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
//await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()
