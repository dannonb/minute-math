export const timer = (seconds: number, onEverySecond: (value: number) => void, onEnd: () => void) => {
    let currentTime = seconds

    const interval = setInterval(() => {
        onEverySecond(currentTime)
        if (currentTime === 0) {
            onEnd()
            clearInterval(interval)
        }
        currentTime--
    }, 1000)
}