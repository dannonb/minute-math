import React from 'react'

interface IDisplayTimeProps {
    time: number
}

const DisplayTime = ({ time }: IDisplayTimeProps) => {
    return (
        <div className={`flex mb-5 h-24 w-24 justify-center items-center border-2 border-black rounded-full bg-white ${time <= 10 && 'animate-pulse'}`}>
            <div className='text-center'>
                <p className='text-3xl font-semibold'>{time}</p>
            </div>
        </div>
    )
}

export default DisplayTime