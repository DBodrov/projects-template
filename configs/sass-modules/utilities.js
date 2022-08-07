const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const jsxRegex = /\.(js|jsx)$/;
const tsxRegex = /\.(ts|tsx)$/;

const loadersTests = {
  cssRegex,
  cssModuleRegex,
  sassRegex,
  sassModuleRegex,
  jsxRegex,
  tsxRegex,
};

module.exports = loadersTests;
