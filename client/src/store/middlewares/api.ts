import {FAIL, START, SUCCESS} from '../ac'

export const api = (store: any) => (next: any) => (action: any) => {
  const {callAPI, ...rest} = action
  if (!callAPI) {
    next(rest)
  } else {
    next({
      ...rest,
      type: action.type + START,
    })
    fetch(callAPI)
      .then((res) => res.json())
      .then((response) => {
        next({
          ...rest,
          type: action.type + SUCCESS,
          response: response,
        })
      })
      .catch((e) =>
        next({
          ...rest,
          type: action.type + FAIL,
          error: e,
        })
      )
  }
}
