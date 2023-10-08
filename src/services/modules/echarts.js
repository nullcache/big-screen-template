import hyRequest from '../request'

export function getPie() {
  return hyRequest.get({
    url: '/pie'
  })
}

export function getLine() {
  return hyRequest.get({
    url: '/line'
  })
}

export function getBar() {
  return hyRequest.get({
    url: '/bar'
  })
}
