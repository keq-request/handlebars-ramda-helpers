import * as Handlebars from 'handlebars'
import { registerAddition } from './register-addition'
import { registerFunction } from './register-function'
import { registerList } from './register-list'
import { registerLogic } from './register-logic'
import { registerMath } from './register-math'
import { registerObject } from './register-object'
import { registerRelation } from './register-relation'
import { registerString } from './register-string'
import { registerType } from './register-type'


export function register(hbs: typeof Handlebars): void {
  registerFunction(hbs)
  registerList(hbs)
  registerLogic(hbs)
  registerMath(hbs)
  registerObject(hbs)
  registerRelation(hbs)
  registerType(hbs)
  registerAddition(hbs)
  registerString(hbs)
}

