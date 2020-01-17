const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    //dist es una convencion de js donde se ponen los compilados
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}