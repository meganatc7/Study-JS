const path = require("path");

module.exports = {
  mode: "production",
  entry: "./source/index.js",
  output: {
    // __dirname: 현재 webpack.config.js파일이 있는 경로
    // 그 안에 public라는 하위 경로를 만들어서 output 경로를 설정
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};
