# 영화 서치 앱을 Typescript로 구현해보자
![GitHub package.json version](https://img.shields.io/github/package-json/v/sultan99/react-on-lambda.svg)
[![Build Status](https://travis-ci.org/sultan99/react-on-lambda.svg?branch=master)](https://travis-ci.org/sultan99/react-on-lambda)
[![Coverage Status](https://coveralls.io/repos/github/sultan99/react-on-lambda/badge.svg)](https://coveralls.io/github/sultan99/react-on-lambda)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-on-lambda@0.6.1/dist/react-on-lambda.min.js?compression=gzip)](https://unpkg.com/react-on-lambda@0.6.1/dist/react-on-lambda.min.js)
[![GitHub license](https://img.shields.io/github/license/sultan99/react-on-lambda.svg)](https://github.com/sultan99/react-on-lambda/blob/master/LICENSE)

> A tiny library that simplifies the use of [React](https://github.com/facebook/react) without JSX.

## 시작하기 
The primary you will need to install `react-on-lambda` and `react`:

```sh
$ npm i react-on-lambda react -S
```

optionally you can install `styled-components` if you are going to use it:

```sh
$ npm i styled-components -S
```
<br/>

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

<br/>

**Currying function**

Endless currying until `children` or empty parameter is applied to the function.

```js
const onClick = () => {} // just for demo

const span = λ.span({className: `tag`})({color: green})({size: `large`}) // -> function
span()
// jsx equivalent
<span className="tag" color="green" size="large"/>

const btnPrimary = λ.button({primary: true}) // -> function
btnPrimary({onClick}, `Save`)
// jsx equivalent
<button primary onClick={onClick}>Save</button>
```

So with currying you can predefine some properties of components.

Or even you can override properties later.

```js
const span = λ.span({size: `large`}) // -> function
span({size: `small`}, `Sorry we changed our mind`)
// jsx equivalent
<span size="small">Sorry we changed our mind</span>
```

<br/>

**Styling**

`λ` wraps [styled-components](https://github.com/styled-components/styled-components) 
and returns a function. 
>Installation of styled-components is optional

```js
import λ from 'react-on-lambda'

const header = λ.h1`
  color: #ff813f;
  font-size: 22px;
`

const onClick = () => alert(`Hi!`)

const app = λ.div(
  header(`Welcome to React on λamda!`),
  λ.button({onClick}, `OK`)
)

export default app
```
<br/>

**Function mapKey**
```js
const pages = [`Home page`, `Portfolio`, `About`]

λ.ul(
  λ.mapKey(λ.li, pages)
)

// jsx equivalent
<ul>
  {pages.map((item, key) =>
    <li key={key}>
      {item}
    </li>
  )}
</ul>
```
<br/>

**Composition**
```js
const data = [
  {id: 123, name: `Albert`, surname: `Einstein`},
  {id: 124, name: `Daimaou `, surname: `Kosaka`},
]

const userList = λ.compose(
  λ.div({class: `followers`}),
  λ.ul,
  λ.mapKey(λ.li),
  λ.mapProps({key: `id`, children: `name`})
)

userList(data)

// jsx equivalent
const UserList = props => (
  <div className="followers">
    <ul>
      {props.data.map(user =>
        <li key={user.id}>
          {user.name}
        </li>
      )}
    </ul>
  </div>
)

<UserList data={data}/>
```
<br/>

**Nesting**
```js
const postPage = λ.nest(
  λ.main({class: `app`}),
  λ.section,
  λ.article(`
    Lorem ipsum dolor sit amet,
    Ernestina Urbanski consectetur adipiscing elit.
    Ut blandit viverra diam luctus luctus...
  `),
)

// jsx equivalent
const PostPage = () => (
  <main className="app">
    <section>
      <article>
        Lorem ipsum dolor sit amet,
        Ernestina Urbanski consectetur adipiscing elit.
        Ut blandit viverra diam luctus luctus...
      </article>
    </section>
  </main>
)
```
<br/>

**Debug**

```js
const userList = λ.compose(
  λ.div,
  λ.ul,
  λ.log(`after mapping`), // -> will log piping value
  λ.mapKey(λ.li)
)
```

<br/>

## Editor configuration
> Code highlighting in Atom

<img src="https://raw.githubusercontent.com/sultan99/react-on-lambda/gh-pages/assets/snippet-atom.png" style="border-radius: 4px;"/>
<br/>

Personally I hate to use symbols `$` `_` it makes code look dirty and reminds me [Perl](https://regmedia.co.uk/2017/10/31/perl_code_example.png) or regular expression.
I prefer to use Greek letter `λ` – short and meaningful.

Of course you can use any identifier at your own choice:
```js
import l from 'react-on-lambda'
// or 
import {div, h1} from 'react-on-lambda'

```

If you like to try using `λ` you can setup hot key and CSS syntax highlighting following the instructions bellow:
- [Github Atom](./docs/atom.md)
- Microsoft VS Code (will be provided)

<br/>
<br/>

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
