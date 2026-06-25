import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerType(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__is', wrap(R.is))
  hbs.registerHelper('r__isNil', wrap(R.isNil))
  hbs.registerHelper('r__propIs', wrap(R.propIs))
  hbs.registerHelper('r__type', wrap(R.type))
}
