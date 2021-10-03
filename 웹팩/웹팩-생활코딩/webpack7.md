## 플러그인

> 번들링한 최종적인 결과물을 변화시키는 것
>
> loader보다 훨씬 자유롭고 간편하다.
>
> ##### Webpack Plugin?
>
> 각각의 파일을 해석하는 데 들어가는 로더와 달리 번들된 결과물을 처리하는 것이 플러그인이다.
>
> 5개의 파일이 있다고 하면 로더는 각각의 파일을 모듈화 할 때 호출되고(5번), 플러그인은 최종 1번 호출된다.



### HTML웹팩플러그인

```bash
$ npm install --save-dev html-webpack-plugin
```



html파일에 하나하나 번들링된 파일을 script로 추가해주지 않고 webpack 실행 시 바로 파일이 만들어지도록 한다.



기존에 최상위에 있던 파일인 about.html과 index.html을 source 디렉토리에 집어 넣는다.

./source/about.html, ./source/index.html



그런 다음 webpack.config.js를 수정한다.

```js
const path = require("path");
// HtmlWebpackPlugin 이라는 변수를 하나 만들고
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    // __dirname: 현재 webpack.config.js파일이 있는 경로
    // 그 안에 public라는 하위 경로를 만들어서 output 경로를 설정
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
      // 사용 시에는 하나의 객체를 만들어서 사용한다.
    new HtmlWebpackPlugin({
      template: "./source/index.html", // 템플릿이 되는 기존 파일
      filename: "./index.html",	       // 결과물
      chunks: ["index"],			   // 번들링 파일(entry 파일 index.js)
    }),
      // 위와 마찬가지
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
```

이렇게 하고 난뒤

npx webpack을 하고 나면

public이라는 폴더 안에 about.html, index.html이 번들링 파일들이 추가되어 생기게 된다.





### 🎈 HtmlWebpackPlugin

이 플러그인은 빌드(컴파일, 번들리 등)된 파일 이름에 해시가 포함된 경우 유용하게 사용할 수 있다.

즉 번들링 파일의 이름이 굉장히 복잡하면 손코딩으로 주입하기 힘들기 때문에 해당 플러그인을 사용한다.



HTML을 동적으로 생성할 수 있는 플러그인이다.

해당 플러그인을 사용하면 index.html에서 js file을 로드하는 부분을 삭제해도 된다.

사용할 html 파일을 template로 지정 후에 사용하면 빌드 결과물이 생성되는 output 폴더에 index.html 파일이 생성된다.

templateParameters, minify등의 옵션으로 생성될 html파일에 원하는 처리를 해줄 수 있다.
(minify: 공백, 줄바꿈, 주석 삭제)