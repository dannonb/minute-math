import React from 'react'

interface ISettingsProps {
    setDifficulty: (difficulty: number) => void
    setShowGame: (showGame: boolean) => void
}

const difficulties = [
    {
        text: 'Easy',
        value: 1,
        color: '[#73964E]'
    },
    {
        text: 'Medium',
        value: 2,
        color: '[#FFCB77]'
    },
    {
        text: 'Hard',
        value: 3,
        color: '[#8A3033]'
    }
]

const Settings = ({ setDifficulty, setShowGame }: ISettingsProps) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            {difficulties.map((difficulty, index) => (
                <button className={`bg-white hover:bg-gray-200 text-gray-800 md:text-2xl font-bold py-2 px-4 border border-gray-400 rounded shadow w-1/4 max-w-xs my-5`} key={index} onClick={() => {
                    setDifficulty(difficulty.value)
                    setShowGame(true)
                }}>{difficulty.text}</button>
            ))}
        </div>
    )
}

export default Settings