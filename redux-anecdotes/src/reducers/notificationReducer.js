

const reducer = (state = 0, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      return state + 1
    default:
      return state
  }
}

export default reducer