import React from 'react'
import './App.css'

import BtnLikeOrDislike from './components/BtnLikeOrDislike'
import BtnForColors from './components/BtnForColors'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <div className="App">
      <BtnLikeOrDislike />
      <BtnForColors />
      <Counter />
    </div>
    </>
  )
}

export default App
