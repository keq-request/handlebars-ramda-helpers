
import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerMath(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__add', wrap(R.add))
  hbs.registerHelper('r__dec', wrap(R.dec))
  hbs.registerHelper('r__divide', wrap(R.divide))
  hbs.registerHelper('r__inc', wrap(R.inc))
  hbs.registerHelper('r__mathMod', wrap(R.mathMod))
  hbs.registerHelper('r__mean', wrap(R.mean))
  hbs.registerHelper('r__median', wrap(R.median))
  hbs.registerHelper('r__modulo', wrap(R.modulo))
  hbs.registerHelper('r__multiply', wrap(R.multiply))
  hbs.registerHelper('r__negate', wrap(R.negate))
  hbs.registerHelper('r__product', wrap(R.product))
  hbs.registerHelper('r__subtract', wrap(R.subtract))
  hbs.registerHelper('r__sum', wrap(R.sum))
}
