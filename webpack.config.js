//npm add depedency into package.json including babel and live-server and webpack react reactdom 等
//scripts in package.json
//entry -> output path has to be the absolute path
//3rd party module react and react dom install->import->use (.egreact validator) in app.js
//类似react react-dom这种包 必须先npm add 再在文件里import才能用
//loader convert jsx to vanilla js; babel-core(run jsx in server side)npm add babel-core@6.25.0 babel-loader @7.1.1 babel-cli(run jsx in webpack)
//set up the loader in module{} tell webpack to use babel to run all the js files exclude the packages in modules
//tell webpack the preset of babel in .babelrc file
//debug tool in webpack
//add anarry in rules for scss
//use take an array of loaders loader takes only one;
//style-loader will dump file into dom and css-loader  will compile each css code
//sass-loader 类似 babel-loader ， node-sass类似babel-core
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};


// ['style-loader',
//      'css-loader',
//     'sass-loader']
//一些有个webpack就删掉的scripts
// "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
// },
//build会跑一次写入文件bundle.js 需要借助live-server才能跑
// "build": "webpack",
//dev-server不会写入直接存在memory为了快 这个融合了webpack watch和live-server
// "dev-server":"webpack-dev-server"
