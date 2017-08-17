## ECMA Script 2015

[poiemaweb](http://poiemaweb.com) 정리 자료 참고

1. [let, const와 블록 레벨 스코프](http://poiemaweb.com/es6-block-scope)
1. [템플릿 리터럴(Template Literals)](http://poiemaweb.com/es6-template-literals)
1. [화살표 함수(Arrow function)](http://poiemaweb.com/es6-arrow-function)
1. [기본 파라미터 초기값, Rest 파라미터, Spread 연산자](http://poiemaweb.com/es6-extended-parameter-handling)
1. [디스트럭처링(Destructuring)](http://poiemaweb.com/es6-destructuring)
1. [객체 리터럴 프로퍼티 기능 확장](http://poiemaweb.com/es6-enhanced-object-property)
1. [클래스(Class)](http://poiemaweb.com/es6-class)
1. [모듈(Module)](http://poiemaweb.com/es6-module)
1. [프로미스(Promise)](http://poiemaweb.com/es6-promise)
1. [이터레이션 프로토콜(iteration protocol)과 for-of 루프](http://poiemaweb.com/es6-iteration-for-of)
1. [심볼(Symbol)](http://poiemaweb.com/es6-symbol)
1. [제너레이터(Generator)](http://poiemaweb.com/es6-generateor)

---

# Babel v6 + Webpack v3

[Babel 6와 Webpack 3를 이용한 ES6 환경 구축](http://poiemaweb.com/es6-babel)

### Babel & 프리셋 설치

```sh
$ npm init -y
$ npm install babel-cli babel-preset-env --save-dev
```

### `.babelrc` 파일 생성 및 프리셋 설정

```json
{
  "presets": ["env"]
}
```

### `package.json` 파일 NPM Script

관찰(`--watch`), 디렉토리 출력(`--output-dir`) 옵션 설정 추가

```json
{
  "scripts": {
    "build": "babel {소스_디렉토리} -w -d {출력_디렉토리}"
  }
}
```

### Webkpack v3 설치

```sh
$ npm install webpack babel-loader --save-dev
```

### `package.json` 파일 NPM Script 수정

```json
{
  "scripts": {
    "build": "webpack -w"
  }
}
```

### `webpack.config.js` 파일 추가 및 스크립팅

```js
var path = require('path');

module.exports = {
  entry: {
    entry: './src/entry.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  devtool: 'source-map'
};
```