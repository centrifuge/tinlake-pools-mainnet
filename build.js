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

const poolMetadata = __dirname + '/metadata/'
const pools = loadMetadata(poolMetadata)
const poolModule = "module.exports = "+JSON.stringify(pools)
fs.writeFile(__dirname + '/out/index.js', poolModule, (err) => {
    if (err) {
        throw err
    }
})


const poolList = JSON.stringify(pools.reduce((l, p) => {
    if (p.addresses) l[p.addresses['ROOT_CONTRACT']] = p
    return l
},{}))

fs.writeFile(__dirname + '/out/pools.json', poolList, (err) => {
    if (err) {
        throw err
    }
})

