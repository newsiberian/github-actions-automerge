const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

exec('./release 1.1.0').then((out) => {
    console.log(out)
}).catch((err) => {
    console.error(err)
})