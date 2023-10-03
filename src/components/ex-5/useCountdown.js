import { useEffect, useState } from 'react';

function useCountdown(targetDate) {
  const storedCountDownDate = localStorage.getItem('countDownDate');
  const initialCountDownDate = storedCountDownDate
    ? new Date(parseInt(storedCountDownDate, 10))
    : new Date(
        targetDate.year,
        targetDate.month - 1,
        targetDate.day,
        targetDate.hours,
        targetDate.minutes,
        0
      );

  const countDownDate = initialCountDownDate.getTime();

  const timeDifference = countDownDate - new Date().getTime();

  const [countDown, setCountDown] = useState(timeDifference);

  useEffect(() => {
    localStorage.setItem('countDownDate', countDownDate.toString());

    const interval = setInterval(() => {
      setCountDown(timeDifference);
    }, 1000);

    if (timeDifference <= 0) {
      setCountDown(0);
      clearInterval(interval);
      localStorage.removeItem('countDownDate');
      return;
    }

    return () => clearInterval(interval);
  }, [timeDifference, countDownDate]);

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
