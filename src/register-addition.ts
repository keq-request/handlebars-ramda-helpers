import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerAddition(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__Array', wrap(Array))
  hbs.registerHelper('r__Object', (options: Handlebars.HelperOptions) => options.hash as unknown)

  hbs.registerHelper('r__define', (name, value, options) => {
    if (!options.data.root) options.data.root = {}
    options.data.root[name] = value
  })

  hbs.registerHelper('r__isObject', wrap(R.is(Object)))
  hbs.registerHelper('r__isNumber', wrap(R.is(Number)))
  hbs.registerHelper('r__isString', wrap(R.is(String)))
  hbs.registerHelper('r__isArray', wrap(R.is(Array)))
  hbs.registerHelper('r__isFunction', wrap(R.is(Function)))
  hbs.registerHelper('r__isBoolean', wrap(R.is(Boolean)))
  hbs.registerHelper('r__isTrue', wrap(R.identical(R.T())))
  hbs.registerHelper('r__isFalse', wrap(R.identical(R.F())))


  const allIs = R.useWith(R.all, [R.is, R.identity])
  const allEq = R.useWith(R.all, [R.identical, R.identity])

  hbs.registerHelper('r__allIs', wrap(allIs))
  hbs.registerHelper('r__allIsObject', wrap(allIs(Object)))
  hbs.registerHelper('r__allIsNumber', wrap(allIs(Number)))
  hbs.registerHelper('r__allIsString', wrap(allIs(String)))
  hbs.registerHelper('r__allIsArray', wrap(allIs(Array)))
  hbs.registerHelper('r__allIsFunction', wrap(allIs(Function)))
  hbs.registerHelper('r__allIsBoolean', wrap(allIs(Boolean)))
  hbs.registerHelper('r__allIsTrue', wrap(allEq(R.T())))
  hbs.registerHelper('r__allIsFalse', wrap(allEq(R.F())))


  const padLeft = R.curry((fillString: string, maxLength: number, str: string) => String(str).padStart(maxLength, fillString))
  const padRight = R.curry((fillString: string, maxLength: number, str: string) => String(str).padEnd(maxLength, fillString))

  hbs.registerHelper('r__padLeft', wrap(padLeft))
  hbs.registerHelper('r__padRight', wrap(padRight))
}

