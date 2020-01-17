//Para manipular las rutas de manera mas programatica
const path = require('path')

module.exports = {
  entry: './index.js',
  //Todas las configuraciones de la salida
  output: {
    //resolve recive un conjunto de rutas y nos devuelve una absoluta
    //__dirname es el directorio en el que estamos actualmente
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}