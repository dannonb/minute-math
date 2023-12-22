import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

// import Question from './Question'
// import Answers from './Answers'
import Stats from './Stats'
import DisplayTime from './DisplayTime'

import {
    randomNumber,
    additionQuestion,
    subtractionQuestion,
    multiplicationQuestion,
    exponentQuestion
} from '@/utils/questions'

import { timer } from '@/utils/timer'
import Question from './Question'
import Answers from './Answers'
import Results from './Results'

interface IGameProps {
    difficulty: number,
    setIsPlaying: (isPlaying: boolean) => void
    isPlaying: boolean
    setShowGame: (showGame: boolean) => void
}

const Game = ({ difficulty, setIsPlaying, isPlaying, setShowGame }: IGameProps) => {

    const [score, setScore] = useState(0)
    const [totalGuesses, setTotalGuesses] = useState(0)

    const [currentQuestion, setCurrentQuestion] = useState<string>('')
    const [correctAnswer, setCorrectAnswer] = useState<number>()
    const [currentChoices, setCurrentChoices] = useState<number[]>([])

    const [currentTime, setCurrentTime] = useState<number>(60)
    const [message, setMessage] = useState<string>('')
    const [showResults, setShowResults] = useState(false)

    const showNextQuestion = () => {
        let random = randomNumber(0, 3)
        let question = [additionQuestion(difficulty), subtractionQuestion(difficulty), multiplicationQuestion(difficulty)][random]


        setCurrentQuestion(question.expression)
        setCorrectAnswer(question.answer)
        setCurrentChoices(question.choices)
    }

    const handleGuess = (guess: number) => {
        if (guess === correctAnswer) {
            setScore((score) => score + 1)
            setTotalGuesses((guesses) => guesses + 1)
        } else {
            setTotalGuesses((guesses) => guesses + 1)
        }
        showNextQuestion()
    }

    const handleOnEverySecond = (value: number) => {
        setCurrentTime(value)
    }

    const handleOnEnd = () => {
        setIsPlaying(false)
        setMessage('Time is up!')
        setShowResults(true)
    }

    const ready = () => {
        setMessage('Ready')
        setTimeout(() => {
            setMessage('Set')
            setTimeout(() => {
                setMessage('Go!')
                setTimeout(() => {
                    setMessage('')
                    startTimer()
                }, 500)
            }, 1000)
        }, 1000)
    }

    const startTimer = () => {
        console.log('starting timer')
        if (isPlaying) return
        setIsPlaying(true)
        showNextQuestion()
        timer(59, handleOnEverySecond, handleOnEnd)
    }

    useEffect(() => {
        ready()
    }, [])
    return (
        <div>
            {message ? (
                <p className='text-5xl text-center font-bold text-gray-400'>{message}</p>
            ) : (
                <div className='flex flex-col items-center justify-center'>
                    <Stats score={score} guesses={totalGuesses} />
                    <DisplayTime time={currentTime} />
                    <Question expression={currentQuestion} />
                    <Answers choices={currentChoices} handleSelectAnswer={handleGuess} />
                </div>
            )}
            {showResults && <Results difficulty={difficulty} score={score} guesses={totalGuesses} setShowGame={setShowGame} />}
        </div>
    )
}

export default Game