const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 로더가 아니고 플러그인이때문에 생성자가 필요
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js", //[name]은 entry에 설정한 키값
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        //css-loader까지만 하면 빌드는 되지만 브라우저가 js에 import한 css모듈을 인식하진 못함.
        //그래서 style-loader가 필요
      },
      {
        test: /\.jpg$/,
        // use: ["file-loader"],
        use: [
          {
            loader: "file-loader",
            //이렇게 옵션을 걸어주면 이미지의 상대경로가 나타나게된다.
            //원래는 이미지 파일 이름만 나오는데, 옵션 해주면 ../dist/이미지파일이름 요론식
            options: {
              //publicPath: "../dist",// 밑에서 html을 이제 dist폴더에 빌드해줬기 때문에 이미지 경로 설정이 따로 필요 없다.
              name: "[name].[ext]?[hash]", //파일의 결과물의 이름을 해시값 보다는 파일의 원래 이름으로 설정 name: 이름, ext: 확장자
              //hash는 뒤에 해시값,, (브라우저가 가진 이미지 캐시를 사용하지 않도록 처리)
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // src/indx.html이 템플릿이 되어서
    // 해당 템플릿에 script가 포함되어 dist 경로에 같이 빌드된 html 파일이 생성된다.
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
