const semver = require('semver');
const chalk = require('chalk');

const {
  engines: { node: nodeVersion },
} = require('../package.json');

if (!semver.satisfies(process.version, nodeVersion)) {
  console.info(
    chalk.red.bold(
      `Required Node version ${nodeVersion} not satisfied with current version ${process.version}.`
    )
  );
  process.exit(1);
}
