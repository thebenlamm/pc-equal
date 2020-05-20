# A self contained, dependency free, module to determine equality of terms while keeping in mind the sensitivity of others.

### Installation
Using npm:
```
$ npm i --save pc-equal
```

### Usage:
```
const pcequal = require('pc-equal');

console.log( pcequal('foo', 'bar') ); // false
console.log( pcequal('man', 'oppressor') ); // true
```
