import React from 'react'

interface IAnswerTileProps {
  choice: number;
  handleOnClick: (choice: number) => void;
}

const AnswerTile = ({ choice, handleOnClick }: IAnswerTileProps) => {
  return (
    <button className='border-2 border-black rounded p-2 m-10 font-bold bg-orange-200 hover:bg-gray-200 text-2xl' onClick={() => handleOnClick(choice)}>{choice}</button>
  )
}

export default AnswerTile