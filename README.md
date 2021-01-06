# 영화 서치 앱을 Typescript로 구현

> [How to build a movie search app using React Hooks](https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/)을 참고하였습니다.

## Getting Started 

Project clone & install

```sh
$ git clone https://github.com/sea5625/youha_movie.git
$ cd youha_movie
$ npm `or` yarn install
```

Start

```sh
$ npm `or` yarn start
```


## API documentation

**Creating element and component**

```js
import λ, {div} from 'react-on-lambda'

div(`Hello world!`)
// jsx equivalent
<div>Hello world!</div>

λ.section({class: `sample`}, `Hello world!`)
// jsx equivalent
<section className="sample">Hello world!</section>

λ(Provider, {store}, app)
// jsx equivalent
<Provider store={store}><App/></Provider>
```


## Feedback 
Any questions or suggestions?

You are welcome to discuss it on:

[![Gitter](https://badges.gitter.im/react-on-lambda/community.svg)](https://gitter.im/react-on-lambda/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/sultan_arziev)

<br/>
<br/>

<a href="https://www.buymeacoffee.com/KGEzqayNQ" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg" alt="Buy Me A Coffee"/>
</a>
