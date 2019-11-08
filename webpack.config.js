const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        //别名
        alias: {
            'three/TrackballControls': path.join(__dirname, 'node_modules/three/examples/js/controls/TrackballControls.js'),
            'three/DragControls': path.join(__dirname, 'node_modules/three/examples/js/controls/DragControls.js'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            'THREE': 'three/build/three'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,  //只检测js文件
            exclude: /node_modules/,  //排除node_modules文件夹
            enforce: "pre",  //提前加载使用
            use: { //使用eslint-loader解析
              loader: "eslint-loader" 
            }
          }        
        ]
      }
      
}