import React from 'react'

interface IQuestionProps {
    expression: string;
}

const Question = ({ expression }: IQuestionProps) => {
  return (
    <div className='lg:w-1/6 w-full p-15 h-24 items-center flex justify-center lg:my-5 lg:rounded my-2 bg-white lg:border-2 border-black'>
        <p className='lg:text-4xl text-3xl font-bold text-center'>{expression}</p>
    </div>
  )
}

export default Question