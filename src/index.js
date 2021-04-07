import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const goodClickHandler = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const okClickHandler = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const badClickHandler = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const resetClickHandler = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={goodClickHandler}>good</button>
      <button onClick={okClickHandler}>neutral</button>
      <button onClick={badClickHandler}>bad</button>
      <button onClick={resetClickHandler}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)