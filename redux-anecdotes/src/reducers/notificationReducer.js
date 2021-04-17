const initialState = {
  message: '',
  visible: false
}

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
  return async dispatch => {
    dispatch({
      type: 'SHOW',
      message
    })
    await new Promise(f => setTimeout(f, timeoutInSeconds * 1000));
    dispatch({
      type: 'HIDE'
    })
  }
}

export default reducer