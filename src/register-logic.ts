
import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerLogic(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__allPass', wrap(R.allPass))
  hbs.registerHelper('r__and', wrap(R.and))
  hbs.registerHelper('r__both', wrap(R.both))
  hbs.registerHelper('r__complement', wrap(R.complement))
  hbs.registerHelper('r__cond', wrap(R.cond))
  hbs.registerHelper('r__defaultTo', wrap(R.defaultTo))
  hbs.registerHelper('r__isEmpty', wrap(R.isEmpty))
  hbs.registerHelper('r__not', wrap(R.not))
  hbs.registerHelper('r__or', wrap(R.or))
  hbs.registerHelper('r__pathSatisfies', wrap(R.pathSatisfies))
  hbs.registerHelper('r__propSatisfies', wrap(R.propSatisfies))
  hbs.registerHelper('r__until', wrap(R.until))
  hbs.registerHelper('r__when', wrap(R.when))
  hbs.registerHelper('r__xor', wrap(R.xor))
}
