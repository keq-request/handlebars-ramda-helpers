/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerFunction(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__F', wrap(R.F))
  hbs.registerHelper('r__T', wrap(R.T))
  hbs.registerHelper('r__identity', wrap(R.identity))
  hbs.registerHelper('r__empty', wrap(R.empty))
  hbs.registerHelper('r__descend', wrap(R.descend))
  hbs.registerHelper('r__converge', wrap(R.converge))
  hbs.registerHelper('r__compose', wrap(R.compose))
}
