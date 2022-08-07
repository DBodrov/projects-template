const path = require('path');
const fs = require('fs');
const packageJson = require('../package.json');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    resolveApp,
    appName: packageJson.name,
};
