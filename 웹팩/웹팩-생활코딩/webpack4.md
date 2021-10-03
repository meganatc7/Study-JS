# 모드 설정



webpack으로 번들링 할때 개발자 모드로 할지 배포 모드로 할 지 설정을 할 수가 있다.

마찬가지로 webpack.config.js에 설정을 해준다.

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    // __dirname: 현재 webpack.config.js파일이 있는 경로
    // 그 안에 public라는 하위 경로를 만들어서 output 경로를 설정
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};

```

이렇게 mode: "development"로 적어주면 된다.



프로젝트 진행할 때는 development로 하다가

배포때는 webpack.config.prod.js 파일을 하나 만들어서

```js
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

```

이렇게 해주고

```bash
$ npx webpack --config webpack.config.prod.js
```

위 명령어를 실행시켜 배포모드로 번들링을 한다.