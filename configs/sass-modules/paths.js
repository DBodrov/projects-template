/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  }
  if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  }
  return inputPath;
}

const getPublicUrl = (appPackageJson) => envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  htmlFile: resolveApp('src/index.html'),
  appBuild: resolveApp('dist'),
  appIndexJs: resolveApp('src/index.tsx'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  servedPath: getServedPath(resolveApp('package.json')),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  resolveApp,
  // appBuild: resolveApp('build'),
  // appPublic: resolveApp('public'),
  // appHtml: resolveApp('public/index.html'),
  // yarnLockFile: resolveApp('yarn.lock'),
  // testsSetup: resolveApp('src/setupTests.js'),
  // proxySetup: resolveApp('src/setupProxy.js'),
};
