const path = require("path"); // 경로를 쉽게 조작할 수 있게 함 (node)
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "lecture-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // 확장자 생략하고 싶을 때, webpack이 알아서 찾아줌
  },

  // 입력
  entry: {
    app: ["./client"], // 얘네를 합쳐서 dist/app.js로 만들어준다, clinet.jsx에서 WordRelay 불러오기 때문에 WordRelay는 가져올 필요 없음
  },

  // 모듈 적용
  module: {
    rules: [
      {
        test: /\.jsx?$/, // js, jsx 파일에 babel-loader를 적용한다. (이전 문법도 호환 가능하게)
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()],

  // 출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "./dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "./dist/" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
