/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HelperDelegate } from 'handlebars'
import * as R from 'ramda'


export function wrap(fn: Function): HelperDelegate {
  return (...args) => fn(...R.dropLast(1, args))
}
