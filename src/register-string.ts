import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { blockWrap } from './block-wrap'
import { wrap } from './wrap'


export function registerString(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__replaced', wrap(R.replace))
  hbs.registerHelper('r__split', wrap(R.split))
  hbs.registerHelper('r__toLower', blockWrap(R.toLower))
  hbs.registerHelper('r__toUpper', blockWrap(R.toUpper))
  hbs.registerHelper('r__trim', blockWrap(R.trim))
}
