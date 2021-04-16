import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
import Filter  from './Filter'

const Anecdote = ({ anecdote, clickHandler }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={clickHandler}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = (props) => {
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteForAnecdote(anecdote.id))
    dispatch(showNotification(`You voted for '${anecdote.content}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} clickHandler={() => vote(anecdote)} />
      )}
    </div>
  )
}

export default AnecdoteList
