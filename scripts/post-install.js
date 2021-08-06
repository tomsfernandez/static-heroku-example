const util = require('util');
const exec = util.promisify(require('child_process').exec);
async function copyResources() {
    try {
        const { stdout, stderr } = await exec('cp -a post-install-resources/. public/');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }catch (err) {
        console.error(err);
    }
}
(async () => await copyResources())()
