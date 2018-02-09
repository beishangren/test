var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    devtool: 'eval-source-map',
    entry:{
        register:__dirname +"/app/register.js",
        // register:"/app/register.js"
    },
    output:{
        path:__dirname+"/public",
        filename:'bundle.js'
    //    filename:'[name].js',
        // excludeChunks: '[name].js'
    },
    devServer:{
        contentBase:"./public", //本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true  //实时刷新
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                },
                exclude:/node_moudles/
            }
            ,
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{

                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
        ]
    }
    // ,
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         //在最前面先定义下HtmlWebpackPlugin--
    //         //var HtmlWebpackPlugin = require('html-webpack-plugin');
    //             // title: 'searchBar',    //配合html-webpack-plugin的配置
    //                 filename: 'register.html',
    //                 template: '/public/register.html',
    //                 thunks: ['common', 'register']
    //         }),
    //         new HtmlWebpackPlugin({
    //             //在最前面先定义下HtmlWebpackPlugin--
    //             //var HtmlWebpackPlugin = require('html-webpack-plugin');
    //                 // title: 'searchBar',    //配合html-webpack-plugin的配置
    //                     filename: 'login.html',
    //                     template: '/public/login.html',
    //                     thunks: ['common', 'login']
    //             }),
    // ]
};