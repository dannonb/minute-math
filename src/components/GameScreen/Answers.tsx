import React from 'react'
import AnswerTile from './AnswerTile'

interface IAnswersProps {
    choices: number[];
    handleSelectAnswer: (choice: number) => void
}

const Answers = ({ choices, handleSelectAnswer }: IAnswersProps) => {
  return (
    <div className='grid grid-cols-2 lg:w-1/3 w-full'>
        {choices.map((choice, index) => (
            <AnswerTile key={index} choice={choice} handleOnClick={handleSelectAnswer} />
        ))}
    </div>
  )
}

export default Answers