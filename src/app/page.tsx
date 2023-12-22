"use client"

import React, { useState } from 'react' 

import Game from '@/components/GameScreen/Game'
import Settings from '@/components/Settings/Settings'

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(1)

  return (
    <section>
      {showGame ? 
        <div className='lg:pt-20 pt-10'>
          <Game difficulty={selectedDifficulty} setIsPlaying={setIsPlaying} setShowGame={setShowGame} isPlaying={isPlaying} />
        </div>
        :
        <div className='lg:pt-60 pt-20'>
          <Settings setDifficulty={setSelectedDifficulty} setShowGame={setShowGame} />
        </div>
      }
    </section>
  )
}

export default HomePage