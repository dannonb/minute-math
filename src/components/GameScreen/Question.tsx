import React from 'react'

interface IQuestionProps {
    expression: string;
}

const Question = ({ expression }: IQuestionProps) => {
  return (
    <div className='lg:w-1/6 p-15 h-24 items-center flex justify-center my-5'>
        <p className='lg:text-4xl text-3xl font-bold text-center'>{expression}</p>
    </div>
  )
}

export default Question