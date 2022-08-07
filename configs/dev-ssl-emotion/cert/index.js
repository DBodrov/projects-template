const fs = require('fs');
const { resolveApp } = require('../utils');

const sslCert = fs.readFileSync(resolveApp('configs/cert/localhost.pem'), 'utf-8');
const sslKey = fs.readFileSync(resolveApp('configs/cert/localhost-key.pem'), 'utf-8');

module.exports = { sslCert, sslKey };
