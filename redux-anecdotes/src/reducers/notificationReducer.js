const initialState = {
  message: '',
  visible: false
}

let timeoutID = null

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW':
      return {message: action.message, visible: true}
    case 'HIDE':
      return {message: '', visible: false}
    default:
      return state
  }
}

export const showNotification = (message, timeoutInSeconds) => {
  if (timeoutID !== null) {
    clearTimeout(timeoutID)
  }

  return async dispatch => {
    dispatch({
      type: 'SHOW',
      message
    })
    await new Promise(f => timeoutID = setTimeout(f, timeoutInSeconds * 1000));
    dispatch({
      type: 'HIDE'
    })
    timeoutID = null
  }
}

export default reducer