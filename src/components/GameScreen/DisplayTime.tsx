import { useEffect, useState } from 'react'

interface IDisplayTimeProps {
    time: number
}


const WARNING_THRESHOLD = 20;
const ALERT_THRESHOLD = 10;
const TIME_LIMIT = 60
const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
    info: {
        color: 'stroke-green-500'
    },
    warning: {
        color: "stroke-orange-500",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "stroke-red-500",
        threshold: ALERT_THRESHOLD
      }
}

const DisplayTime = ({ time }: IDisplayTimeProps) => {

    const [remainingPathColor, setRemainingPathColor] = useState(COLOR_CODES.info.color)
    const [circleDashArray, setCircleDashArray] = useState('')

    const formatTimeLeft = (time: number) => {
        const minutes = Math.floor(time / TIME_LIMIT)

        let seconds = time % TIME_LIMIT
        let secondsString = seconds.toString()

        if (seconds < 10) {
            secondsString = `0${seconds}`
        }

        return `${minutes}:${secondsString}`;
    }

    const calculateTimeFraction = () => {
        const rawTimeFraction = time / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    const calculateCircleDashArray = () => {
        setCircleDashArray(`${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`)
    }

    const calculateRemainingPathColor = () => {
        const { alert, warning } = COLOR_CODES;

        if (time <= alert.threshold) {
            setRemainingPathColor(alert.color)
        } else if (time <= warning.threshold) {
            setRemainingPathColor(warning.color)
        }
    }

    useEffect(() => {
        calculateCircleDashArray()
        calculateRemainingPathColor()
    }, [time])

    return (
        <div className={`relative h-24 w-24 flex mb-5 justify-center items-center text-gray-400 ${time <= 10 && 'animate-pulse'}`}>
            <svg className="-scale-x-100 w-[96px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="fill-none stroke-none">
                    <circle className="stroke-[7px] stroke-gray-400" cx="50" cy="50" r="45" />
                    <path
                        id="base-timer-path-remaining"
                        stroke-dasharray="283"
                        className={`${remainingPathColor} stroke-[7px] stroke-round rotate-90 origin-center transition-all duration-1000 ease-linear`}
                        style={{
                            strokeDasharray: circleDashArray
                        }}
                        d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                        "
                    ></path>
                </g>
            </svg>
            <span className='absolute h-24 w-24 top-0 flex items-center justify-center text-2xl font-bold'>{formatTimeLeft(time)}</span>
        </div>
    )
}

export default DisplayTime