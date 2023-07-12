"use client"

import React, { useEffect, useState } from 'react' 

import Game from '@/components/GameScreen/Game'
import Settings from '@/components/Settings/Settings'

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(1)

  return (
    <section>
      {showGame ? 
        <div className='mt-20'>
          <Game difficulty={selectedDifficulty} setIsPlaying={setIsPlaying} setShowGame={setShowGame} isPlaying={isPlaying} />
        </div>
        :
        <div className='mt-60'>
          <Settings setDifficulty={setSelectedDifficulty} setShowGame={setShowGame} />
        </div>
      }
    </section>
  )
}

export default HomePage