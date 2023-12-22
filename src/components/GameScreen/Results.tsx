import React from 'react'

interface IResultsProps {
  difficulty: number;
  score: number;
  guesses: number;
  setShowGame: (showGame: boolean) => void
}

const Results = ({ difficulty, score, guesses, setShowGame }: IResultsProps) => {

  const getDifficulty = () => {
    if (difficulty === 1) {
      return 'Easy'
    } else if (difficulty === 2) {
      return 'Medium'
    } else {
      return 'Hard'
    }
  }

  const calculatePercentage = () => {
    if (score === 0 || guesses === 0) {
      return '0%'
    }
    let perc = ((score / guesses) * 100).toFixed(1)
    return `${perc}%`
  }
  return (
    <div className='flex flex-col lg:w-1/3 w-full m-auto mt-10 items-center justify-center rounded bg-zinc-900 bg-opacity-90 lg:border-2 border-gray-400 text-gray-400'>
      <h4 className='text-4xl font-semibold m-5 underline'>Results</h4>
      <div>
        <div className='m-5'>
          <span className='md:text-2xl'>Difficulty: </span>
          <span className='md:text-2xl font-bold'>{getDifficulty()}</span>
        </div>
        <div className='m-5'>
          <span className='md:text-2xl'>Score: </span>
          <span className='md:text-2xl font-bold'>{score}</span>
        </div>
        <div className='m-5'>
          <span className='md:text-2xl'>Percentage: </span>
          <span className='md:text-2xl font-bold'>{calculatePercentage()}</span>
        </div>
      </div>
      <div>
        <button className='font-bold py-2 px-4 bg-zinc-900 text-gray-400 hover:bg-gray-400 hover:text-gray-900 text-2xl rounded-full my-5 border-2 border-gray-400' onClick={() => setShowGame(false)}>Play Again</button>
      </div>
    </div>
  )
}

export default Results