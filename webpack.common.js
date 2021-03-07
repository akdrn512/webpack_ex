const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `[name].[hash].[ext]`,
                        outputPath: "images"
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            "@js" : path.join(__dirname, "/src/asset/js"),
            "@css" : path.join(__dirname, "/src/asset/css"),
            "@images" : path.join(__dirname, "/src/asset/images"),
        },
    }
};