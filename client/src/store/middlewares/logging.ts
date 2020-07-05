export const logging = (store: any) => (next: any) => (action: any) => {
  console.log('before', store.getState())
  console.log('action', action)
  next(action)
  console.log('after', store.getState())
}
