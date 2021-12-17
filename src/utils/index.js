import { transform, camelCase, startCase, isArray, isObject } from 'lodash'

export const camelCaseKeys = obj => transform(obj, (acc, value, key, target) => {
  const camelKey = isArray(target) ? key : camelCase(key)
  acc[camelKey] = isObject(value) ? camelCaseKeys(value) : value
})

export const pascalCaseKeys = obj => transform(obj, (acc, value, key, target) => {
  const camelKey = isArray(target) ? key : startCase(key)
  acc[camelKey] = isObject(value) ? pascalCaseKeys(value) : value
})
