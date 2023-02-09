import Cookies from 'js-cookie'

const tokenKey = 'ff_admin_token'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

const projectItemKey = 'ff_project_item'

export function getProjectItem() {
  return JSON.parse(Cookies.get(projectItemKey))
}

export function setProjectItem(projectItem) {
  return Cookies.set(projectItemKey, JSON.stringify(projectItem))
}

export function removeProjectItem() {
  return Cookies.remove(projectItemKey)
}

const preSetLocalStorageKey = 'preSetLocalStorage'
export function setPreSetLocalStorage(data) {
  return localStorage.setItem(preSetLocalStorageKey, data)
}

export function getPreSetLocalStorage() {
  return localStorage.getItem(preSetLocalStorageKey)
}
