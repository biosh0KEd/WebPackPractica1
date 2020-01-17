const path = require('path')

module.exports = {
  //Para esto pasamos la entrada como objeto
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js'),
  },
  mode: 'development',
  output: {
    //dist es una convencion de js donde se ponen los compilados
    path: path.resolve(__dirname, 'dist'),
    //Usamos el template de name que se refiere a cada uno de los nombres
    //Y hacemos que se guarden en dist/js
    filename: 'js/[name].js'
  }
}