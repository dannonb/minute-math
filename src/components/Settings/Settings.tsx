import React from 'react'

interface ISettingsProps {
    setDifficulty: (difficulty: number) => void
    setShowGame: (showGame: boolean) => void
}

const difficulties = [
    {
        text: 'Easy',
        value: 1
    },
    {
        text: 'Medium',
        value: 2
    },
    {
        text: 'Hard',
        value: 3
    }
]

const Settings = ({ setDifficulty, setShowGame }: ISettingsProps) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            {difficulties.map((difficulty, index) => (
                <div className='relative inline-flex group' key={index}>
                    <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-black to-black rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
                    <button className={`bg-zinc-900 bg-opacity-90 text-gray-400 hover:bg-gray-400 hover:text-gray-900 md:text-2xl font-bold py-2 px-4  rounded-full relative inline-flex items-center justify-center text-lg transition-all duration-200 w-[200px] my-5 border-2 border-gray-400`} key={index} onClick={() => {
                        setDifficulty(difficulty.value)
                        setShowGame(true)
                    }}>
                        {difficulty.text}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Settings