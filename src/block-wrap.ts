/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HelperDelegate, HelperOptions } from 'handlebars'
import * as R from 'ramda'


export function blockWrap(fn: Function): HelperDelegate {
  return function(this: any, ...args) {
    const options: HelperOptions = R.last(args)

    if (options.fn) {
      const content = options.fn(this)
      const params = R.dropLast(1, args).concat(content)

      return fn(...params)
    } else {
      return fn(...R.dropLast(1, args))
    }
  }
}

