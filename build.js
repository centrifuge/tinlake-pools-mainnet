const fs = require('fs')

function loadMetadata(folder) {
  let pools = []
  fs.readdirSync(folder).forEach(function(file) {
    if (file.match(/\.json$/) !== null) {
      let data = require(folder + file)
      if (Array.isArray(data)) pools = [...pools, ...data]
      else pools.push(data)
    }
  })
  return pools
}

const kovanPools = __dirname + '/metadata/'

const data = "module.exports = "+JSON.stringify(loadMetadata(kovanPools))+""

fs.writeFile(__dirname + '/out/index.js', data, (err) => {
    if (err) {
        throw err
    }
})
