npm init

으로 패키지 파일을 하나 만들고





이미지 등은 파일로더가 필요

npm i -D file-loader





html파일을 다루기 위해선

npm i html-webpack-plugin -D

loader가 아닌 plugin을 사용하게 된다.



기존에 남아있던 파일들 중 사용하지 않는 것들으 지우는 플러그인

(이미지 파일의 경우 name설정을 해줬을 때 기존에 빌드되었던 해시값 이름의 파일이 남아있음)

npm i -D clean-webpack-plugin

이를 통해 이전에 빌드되었던 파일들을 clean하게 관리 가능