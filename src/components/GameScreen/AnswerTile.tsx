import React from 'react'

interface IAnswerTileProps {
  choice: number;
  handleOnClick: (choice: number) => void;
}

const AnswerTile = ({ choice, handleOnClick }: IAnswerTileProps) => {
  return (
    <button className='w-[100px] rounded-full p-2 m-10 font-bold bg-zinc-900 text-gray-400 hover:bg-gray-400 hover:text-gray-900 text-2xl border-2 border-gray-400' onClick={() => handleOnClick(choice)}>{choice}</button>
  )
}

export default AnswerTile