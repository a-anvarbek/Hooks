import React from 'react'
import './App.css'

import BtnLikeOrDislike from './components/BtnLikeOrDislike'
import BtnForColors from './components/BtnForColors'
import Counter from './components/Counter'
import Chalange from './components/Chalange'
import ChallengeThree from './components/ChallengeThree'

function App() {

  return (
    <>
    <div className="App">
      <BtnLikeOrDislike />
      <BtnForColors />
      <Counter />
      <Chalange />
      <ChallengeThree />
    </div>
    </>
  )
}

export default App
