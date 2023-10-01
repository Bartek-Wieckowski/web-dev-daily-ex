import { useEffect, useState } from "react"

function useCountdown(targetDate) {
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())
    const countDownDate = new Date(
        targetDate.year,
        targetDate.month - 1,
        targetDate.day,
        targetDate.hours,
        targetDate.minutes,
        0
    ).getTime()

    useEffect(() => {
        if (countDownDate <= 0) {
            setCountDown(0);
            return
        }
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000);
        return () => clearInterval(interval)
    }, [countDownDate]);

    calculateTimeUnitsFromCountdown(countDown)
}

const calculateTimeUnitsFromCountdown = (countDownValues) => {
    const days = Math.floor(countDownValues / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDownValues % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDownValues % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDownValues % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds]

}


export { useCountdown }