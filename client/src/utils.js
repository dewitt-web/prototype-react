export const fetchJSON = (...args) => fetch(...args)
  .then(res => res.json())
  .catch(err => {
    if (err.name !== 'AbortError') {
      return err
    }
  })

export const fetchEffect = ({ url, ...options }, callback) => () => {
  const controller = new AbortController()
  fetchJSON(url, Object.assign({ signal: controller.signal }, options))
    .then(callback)
  return () => { controller.abort() }
}
