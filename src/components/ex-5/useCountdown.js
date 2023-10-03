import { useEffect, useState } from 'react';

function useCountdown(targetDate) {
    const countDownDate = new Date(
        targetDate.year,
        targetDate.month - 1,
        targetDate.day,
        targetDate.hours,
        targetDate.minutes,
        0
    ).getTime();

    const timeDifference = countDownDate - new Date().getTime();

    const [countDown, setCountDown] = useState(timeDifference);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(timeDifference);
        }, 1000);

        if (timeDifference <= 0) {
            setCountDown(0);
            clearInterval(interval);
            return;
        }

        return () => clearInterval(interval);
    }, [timeDifference]);

    return calculateTimeUnitsFromCountdown(countDown);
}

const calculateTimeUnitsFromCountdown = (countDownValues) => {
    const days = Math.floor(countDownValues / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDownValues % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (countDownValues % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((countDownValues % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export { useCountdown };
