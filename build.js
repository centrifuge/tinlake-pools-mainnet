const fs = require('fs')

function loadMetadata(folder) {
  let pools = [];
  fs.readdirSync(folder).forEach(function(file) {
    if (file.match(/\.json$/) !== null) {
      var name = file.replace('.js', '')
      pools.push(require(folder + file));
    }
  });
  return pools;
}

const kovanPools = __dirname + '/metadata/'

const data = "module.exports = "+JSON.stringify(loadMetadata(kovanPools))+";";

fs.writeFile(__dirname + '/out/index.js', data, (err) => {
    if (err) {
        throw err;
    }
});
