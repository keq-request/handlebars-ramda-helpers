import test from 'ava'
import * as Handlebars from 'handlebars'
import * as HandlebarsRamdaHelpers from '../src'

HandlebarsRamdaHelpers.register(Handlebars)

test('render', t => {
  const view = {
    books: [
      { type: 'computer', name: 'C Primer Plus', price: 10 },
      { type: 'computer', name: 'An Introduction to Programming in Go', price: 20 },
      { type: 'computer', name: 'Javascript the definitive guide', price: 100 },
      { type: 'comic', name: 'One Piece', price: 100 },
    ],
  }

  const template = `
  I have a lot of books:

  {{~r__define 'divide' (r__compose (r__join '')  (r__repeat '-'))}}
  {{~r__define 'padSpace' (r__padRight ' ')}}

  {{padSpace 40 'bookName'}} | bookPrice
  {{divide 40}} | {{divide 10}}
  {{#each books}}
  {{@root.padSpace 40 name}} | {{@root.padSpace 10 price}}
  {{/each}}

  {{r__define 'priceList' (r__pluck 'price' books)}}
  The total value of these books is approx {{r__sum priceList}}.

  I have {{r__count (r__propEq 'type' 'comic') books}} comic books and {{r__count (r__propEq 'type' 'computer') books}} computer books.
  `

  const str = Handlebars.compile(template)(view)

  t.snapshot(str)
})

test('block helper', t => {
  const template = `
  {{r__toLower "SHOULD LOWER"}}
  {{#r__toLower}}SHOULD LOWER{{/r__toLower}}
  `

  const str = Handlebars.compile(template)({})
  t.snapshot(str)
})

test('r__define invalid context', t => {
  const template = `
    {{#with books}}
      {{r__define "variable" "defined on this context"}}
    {{/with}}

    {{! cannot find variable }}
    {{r__replace "_" "_" variable}}
  `

  const view = {
    books: [
      { title: 'Javascript' },
    ],
  }

  t.throws(() => Handlebars.compile(template)(view))
})

test('r__define custom context', t => {
  const template = `
    {{#with books}}
      {{r__define "variable" "defined on this context" context=@root}}
    {{/with}}

    {{r__replace "_" "_" variable}}
  `

  const view = {
    books: [
      { title: 'Javascript' },
    ],
  }

  t.notThrows(() => Handlebars.compile(template)(view))
})
