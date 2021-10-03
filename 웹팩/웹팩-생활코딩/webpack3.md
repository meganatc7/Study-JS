일일이 매번 명령어를 통해서

```bash
$ npx webpack --entry ./source/index.js --output-path ./public
```

하나 하나 다 번들링을 해줄 필요는 없다.



설정파일을 사용하게 되면 훨씬 간편하게 해결할 수 있다.

먼저 가장 상위 디렉토리에 webpack.config.js라는 파일을 생성한다.

```js
const path = require("path");

module.exports = {
  entry: "./source/index.js",
  output: {
    // __dirname: 현재 webpack.config.js파일이 있는 경로
    // 그 안에 public라는 하위 경로를 만들어서 output 경로를 설정
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
};

```

이렇게 설정할 내용들을 작성해주고



만일 파일 이름이 webpack.config.js라면

```bash
$ npx webpack
```

이 명령어를 통해서 손쉽게 번들링을 할 수 있으며,

다른 파일 이름이라면

```bash
$ npx webpack --config [파일이름.js]
```

이렇게 해주면 된다.





### 😎 Node.js에서 Path 모듈

> node.js에서 기본으로 제공하는 path모듈은 파일/폴더/디렉토리 드으이 경로를 편리하게 설정할 수 있는 기능을 제공해준다.

'안전하게' 경로를 설정하기 위해 path모듈의 join(), resolve()메서드는 꼭 활용해야한다.

> ※ `__filename`, `__dirname`
>
> filename => 현재 파일 경로.확장자
>
> ```js
> console.log(__filename);
> // C:\Users\megan\Desktop\겅부\자바스크립트\웹팩\source\hello.js (절대경로)
> ```
>
> dirname => 현재 디렉터리(폴더) 경로
>
> ```js
> console.log(__dirname);
> // C:\Users\megan\Desktop\겅부\자바스크립트\웹팩\source
> ```





#### ✨ path 모듈 사용 방법

> node의 내장 모듈이므로 별도 설치 없이 바로 사용 가능하다.

##### 0. 모듈 추출 방법

```js
const path = require('path');
```



##### 1. path 메서드

- `path.sep`

  - "현 운영체제의 경로 구분자" 확인

  - 맥 /, 윈도우 \

  - ```js
    console.log('path.sep:', path.sep);
    // path.sep: \
    ```

  

- `path.dirname('파일경로.확장자')`

  - "파일이 위치한 폴더경로" 확인

  - ```js
    console.log(path.dirname(__filename));
    // C:\Users\megan\Desktop\겅부\자바스크립트
    ```



- `path.basename('파일경로.확장자')`

  - "파일명.확장자" 확인

  - ```js
    console.log(path.basename(__filename));
    // a.js
    ```



- `path.basename('파일경로.확장자', '.확장자')`

  - "파일 이름(확장자 제거)" 확인

  - ```js
    console.log(path.basename(__filename, '.js'));
    // a
    ```



- `path.extname('파일경로.확장자')`

  - "확장자" 확인

  - ```js
    console.log(path.extname(__filename));
    // js
    ```

  

- `path.parse(__filename)`

  - 파일을 root(루트경로), dir(디렉터리경로), base(파일명.확장자), ext(.확장자), name(파일명) 으로 파싱한 객체 생성

  - ```js
    console.log(path.parse(__filename));
    /*
    {
      root: 'C:\\',
      dir: 'C:\\Users\\megan\\Desktop\\겅부\\자바스크립트',
      base: 'a.js',
      ext: '.js',
      name: 'a'
    }
    */
    ```



- `path.format(객체)`

  - 파싱된 파일 경로 객체를 다시 '문자열'로 합침

  - ```js
    console.log(path.format(path.parse(__filename)));
    // C:\Users\megan\Desktop\겅부\자바스크립트\a.js
    ```



- `path.normalize('경로')`

  - //나 \등 경로 구분자를 잘못 사용해도 알아서 정상 경로로 변환해줌

  - ```js
    console.log(path.normalize('/user//hello////ok//index.js'));
    // \user\hello\ok\index.js
    ```



- `path.join('경로', '경로', ...)`

  - 여러개의 경로를 알아서 합쳐줌

  - 상위경로(..), 현재경로(.)도 알아서 처리

  - 중간에 /를 만나면 앞의 경로에 이어서 '상대경로'로 처리

  - ```js
    console.log(path.join(__dirname, '/a/b', '..', './b', 'c', '/d'));
    // C:\Users\megan\Desktop\겅부\자바스크립트\a\b\c\d
    ```



- `path.resolve('경로', '경로', ...)`

  - 여러개의 경로를 알아서 합쳐줌

  - 상위경로(..), 현재경로(.)도 알아서 처리

  - join과 다른점은 중간에 /를 만나면 앞에 경로를 다 무시하고, '맨 처음부터' 다시 시작

  - ```js
    console.log(path.resolve(__dirname, '/a/b', '..', './b', 'c', '/d'));
    // C:\d
    ```



