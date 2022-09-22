import * as Handlebars from 'handlebars'
import * as R from 'ramda'
import { wrap } from './wrap'


export function registerRelation(hbs: typeof Handlebars): void {
  hbs.registerHelper('r__clamp', wrap(R.clamp))
  hbs.registerHelper('r__countBy', wrap(R.countBy))
  hbs.registerHelper('r__difference', wrap(R.difference))
  hbs.registerHelper('r__differenceWith', wrap(R.differenceWith))
  hbs.registerHelper('r__eqBy', wrap(R.eqBy))
  hbs.registerHelper('r__equals', wrap(R.equals))
  hbs.registerHelper('r__gt', wrap(R.gt))
  hbs.registerHelper('r__gte', wrap(R.gte))
  hbs.registerHelper('r__identical', wrap(R.identical))
  hbs.registerHelper('r__intersection', wrap(R.intersection))
  hbs.registerHelper('r__lt', wrap(R.lt))
  hbs.registerHelper('r__lte', wrap(R.lte))
  hbs.registerHelper('r__max', wrap(R.max))
  hbs.registerHelper('r__maxBy', wrap(R.maxBy))
  hbs.registerHelper('r__min', wrap(R.min))
  hbs.registerHelper('r__minBy', wrap(R.minBy))
  hbs.registerHelper('r__pathEq', wrap(R.pathEq))
  hbs.registerHelper('r__propEq', wrap(R.propEq))
  hbs.registerHelper('r__sortBy', wrap(R.sortBy))
  hbs.registerHelper('r__symmetricDifference', wrap(R.symmetricDifference))
  hbs.registerHelper('r__symmetricDifferenceWith', wrap(R.symmetricDifferenceWith))
  hbs.registerHelper('r__union', wrap(R.union))
  hbs.registerHelper('r__unionWith', wrap(R.unionWith))
}
