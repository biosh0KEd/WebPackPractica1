const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //Para esto pasamos la entrada como objeto
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    //dist es una convencion de js donde se ponen los compilados
    path: path.resolve(__dirname, 'dist'),
    //Usamos el template de name que se refiere a cada uno de los nombres
    //Y hacemos que se guarden en dist/js
    filename: 'js/[name].js'
  },
  //Aqui van a vivir los loaders
  module: {
    rules: [
      {
        //tipo de archivo a interpretar, con expresion regular
        test: /\.css$/, //todos los archivos que terminene con .css
        //Que hacer con ese tipo de archivo
        //Con un array le indicamos que use ambos loaders
        use: [
          {
            //Aqui ya estamos llamado a la configuracion de abajo
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  //Aqui determinamos la configuracion de los plugins a utilizar
  //Y es la configuracion de la extraccion del css
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}