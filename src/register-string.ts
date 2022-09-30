import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerString(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__replaced', wrap(R.replace))
  hbs.registerHelper('r__split', wrap(R.split))
  hbs.registerHelper('r__toLower', wrap(R.toLower))
  hbs.registerHelper('r__toUpper', wrap(R.toUpper))
  hbs.registerHelper('r__trim', wrap(R.trim))
}
