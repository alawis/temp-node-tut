// MODULES:
/*``````````
    - smaller files === more structure to our applications
    - modules are encapsulated Code (only share minimum)
    - uses CommonJS library under the hood, every file in node is module (by default)
 */

// to access shared variables, functions, use 'require'
// require needs parameter of where the module is located, so you pass the module path
// always, modules path starts with './'

const names = require ('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)


