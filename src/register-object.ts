import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerObject(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__assoc', wrap(R.assoc))
  hbs.registerHelper('r__assocPath', wrap(R.assocPath))
  hbs.registerHelper('r__dissoc', wrap(R.dissoc))
  hbs.registerHelper('r__dissocPath', wrap(R.dissocPath))
  hbs.registerHelper('r__eqProps', wrap(R.eqProps))
  hbs.registerHelper('r__evolve', wrap(R.evolve))
  hbs.registerHelper('r__has', wrap(R.has))
  hbs.registerHelper('r__hasIn', wrap(R.hasIn))
  hbs.registerHelper('r__hasPath', wrap(R.hasPath))
  hbs.registerHelper('r__invert', wrap(R.invert))
  hbs.registerHelper('r__invertObj', wrap(R.invertObj))
  hbs.registerHelper('r__keys', wrap(R.keys))
  hbs.registerHelper('r__keysIn', wrap(R.keysIn))
  hbs.registerHelper('r__lens', wrap(R.lens))
  hbs.registerHelper('r__lensIndex', wrap(R.lensIndex))
  hbs.registerHelper('r__lensPath', wrap(R.lensPath))
  hbs.registerHelper('r__lensProp', wrap(R.lensProp))
  hbs.registerHelper('r__mergeDeepLeft', wrap(R.mergeDeepLeft))
  hbs.registerHelper('r__mergeDeepRight', wrap(R.mergeDeepRight))
  hbs.registerHelper('r__mergeDeepWith', wrap(R.mergeDeepWith))
  hbs.registerHelper('r__mergeDeepWithKey', wrap(R.mergeDeepWithKey))
  hbs.registerHelper('r__mergeLeft', wrap(R.mergeLeft))
  hbs.registerHelper('r__mergeRight', wrap(R.mergeRight))
  hbs.registerHelper('r__mergeWith', wrap(R.mergeWith))
  hbs.registerHelper('r__mergeWithKey', wrap(R.mergeWithKey))
  hbs.registerHelper('r__modify', wrap(R.modify))
  hbs.registerHelper('r__modifyPath', wrap(R.modifyPath))

  hbs.registerHelper('r__objOf', wrap(R.objOf))
  hbs.registerHelper('r__omit', wrap(R.omit))
  hbs.registerHelper('r__over', wrap(R.over))
  hbs.registerHelper('r__path', wrap(R.path))
  hbs.registerHelper('r__pick', wrap(R.pick))
  hbs.registerHelper('r__pickAll', wrap(R.pickAll))
  hbs.registerHelper('r__pickBy', wrap(R.pickBy))
  hbs.registerHelper('r__project', wrap(R.project))
  hbs.registerHelper('r__prop', wrap(R.prop))
  hbs.registerHelper('r__propOr', wrap(R.propOr))
  hbs.registerHelper('r__props', wrap(R.props))
  hbs.registerHelper('r__set', wrap(R.set))
  hbs.registerHelper('r__toPairs', wrap(R.toPairs))
  hbs.registerHelper('r__unwind', wrap(R.unwind))
  hbs.registerHelper('r__values', wrap(R.values))
  hbs.registerHelper('r__view', wrap(R.view))

  hbs.registerHelper('r__where', wrap(R.where))
  hbs.registerHelper('r__whereAny', wrap(R.whereAny))
  hbs.registerHelper('r__whereEq', wrap(R.whereEq))
}
