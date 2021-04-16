import store from '../store'

const initialState = {
  message: '',
  visible: false
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'SHOW':
      return {message: action.message, visible: true}
    case 'HIDE':
      return {message: '', visible: false}
    default:
      return state
  }
}

export const showNotification = (message) => {
  return {
    type: 'SHOW',
    message
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE'
  }
}

export default reducer