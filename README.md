# handlebars-ramda-helpers

[![version](https://img.shields.io/npm/v/handlebars-ramda-helpers.svg?style=flat-square)](https://www.npmjs.com/package/handlebars-ramda-helpers)
[![downloads](https://img.shields.io/npm/dm/handlebars-ramda-helpers.svg?style=flat-square)](https://www.npmjs.com/package/handlebars-ramda-helpers)
[![license](https://img.shields.io/npm/l/handlebars-ramda-helpers.svg?style=flat-square)](https://www.npmjs.com/package/handlebars-ramda-helpers)
[![dependencies](https://img.shields.io/david/keq-request/handlebars-ramda-helpers.svg?style=flat-square)](https://www.npmjs.com/package/handlebars-ramda-helpers)
[![coveralls](https://img.shields.io/coveralls/github/keq-request/handlebars-ramda-helpers.svg?style=flat-square)](https://coveralls.io/github/keq-request/handlebars-ramda-helpers)

<!-- description -->
Provide powerful data processing capabilities for handlebars, by adding the ramda function as helpers.
<!-- description -->

## Usage

<!-- usage -->

Adding ```r__``` before the ramda function name is the handlebars helpers name.
Let see an example:

```typescript
import * as Handlebars from 'handlebars'
import * as HandlebarsRamdaHelpers from 'handlebars-ramda-helpers'

// register helpers before compile
HandlebarsRamdaHelpers.register(Handlebars)


const view = {
  books: [
    { type: 'computer', name: 'C Primer Plus', price: 10 },
    { type: 'computer', name: 'An Introduction to Programming in Go', price: 20 },
    { type: 'computer', name: 'Javascript the definitive guide', price: 100 },
    { type: 'comic', name: 'One Piece', price: 100 },
  ]
}

const template = `
I have a lot of books:

{{~r__define 'divide' (r__compose (r__join '')  (r__repeat '-'))}}

{{r__padRight 40 ' ' 'bookName'}} | bookPrice
{{divide 40}} | {{divide 10}}
{{#each books}}
{{r__padRight 40 ' ' name}} | {{r__padRight 10 ' ' price}}
{{/each}}

{{r__define 'priceList' (r__pluck 'price' books)}}
The total value of these books is approx {{r__sum priceList}}.

I have {{r__count (r__propEq 'type' 'comic') books}} comic books and {{r__count (r__propEq 'type' 'computer') books}} computer books.
`


Handlebars.compile(template)(view)
```

The Output:

```text
I have a lot of books:

bookName                                 | bookPrice
---------------------------------------- | ----------
C Primer Plus                            | 10
An Introduction to Programming in Go     | 20
Javascript the definitive guide          | 100
One Piece                                | 100


The total value of these books is approx 230.

I have 1 comic books and 3 computer books.
```

For more functions, please see [Ramda Doc](https://ramdajs.com/).

### Extension

In order to facilitate the use of ramda in handlebars, some extension functions have been added.

#### Helpers

 name             | description
:-----------------|:---------------------------
 r__define        | Define a variable `{{r__define "variableName" "variableValue"}}
 r__Array         | Create an array `{{r__Array "0" "1" "2"}}`
 r__Object        | Create an object `{{r__Object "key1"="value1" "key2"="value2"}}`
 r__isObject      | R.is(Object)
 r__isNumber      | R.is(Number)
 r__isString      | R.is(String)
 r__isArray       | R.is(Array)
 r__isFunction    | R.is(Function)
 r__isBoolean     | R.is(Boolean)
 r__isTrue        | R.identical(R.T())
 r__isFalse       | R.identical(R.F())
 r__allIs         | R.useWith(R.all, [R.is, R.identity])
 r__allIsObject   | R.all(R.is(Object))
 r__allIsNumber   | R.all(R.is(Number))
 r__allIsString   | R.all(R.is(String))
 r__allIsArray    | R.all(R.is(Array))
 r__allIsFunction | R.all(R.is(Function))
 r__allIsBoolean  | R.all(R.is(Boolean))
 r__allIsTrue     | R.all(R.identical(R.T()))
 r__allIsFalse    | R.all(R.identical(R.F()))
 r__padLeft       | R.curry((fillString, maxLength, str) => String(str).padStart(maxLength, fillString))
 r__padRight      | R.curry((fillString, maxLength, str) => String(str).padEnd(maxLength, fillString))

#### Block Helpers

 name             | description
:-----------------|:---------------------------
 r__define        | Define a variable `{{#r__define "variableName"}}"variableValue"{{/r__define}}`
 r__toUpper       | R.toUpper
 r__toLower       | R.toLower
 r__trim          | R.trim

> All block helpers can use as non-block helper
<!-- usage -->

<!-- addition -->
<!-- addition -->

## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
