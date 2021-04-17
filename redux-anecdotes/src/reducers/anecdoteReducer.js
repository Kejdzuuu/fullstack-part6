import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const chosenAnecdote = state.find(anecdote => anecdote.id === action.data.id)
      const newAnecdote = { ...chosenAnecdote, votes: chosenAnecdote.votes + 1 }
      return state.map(anecdote =>
        anecdote.id === action.data.id ? newAnecdote : anecdote
      ).sort((a, b) => b.votes - a.votes)
    case 'CREATE':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createNewAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default reducer