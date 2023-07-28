import React from 'react'

interface IStatsProps {
    score: number;
    guesses: number
}

const Stats = ({ score, guesses }: IStatsProps) => {
  return (
    <div className='flex item-center justify-center mb-4'>
        <p className='text-md mx-7 font-bold'>{`Score: ${score}`}</p>
        <p className='text-md mx-7 font-bold'>{`Guesses: ${guesses}`}</p>
    </div>
  )
}

export default Stats