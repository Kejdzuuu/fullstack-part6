import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
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
  const anecdotes = useSelector(state =>
    state.anecdotes.filter(anecdote =>
      anecdote.content
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes)
  )

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteForAnecdote(anecdote))
    dispatch(showNotification(`You voted for '${anecdote.content}'`, 5))
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
