import { useEffect, useState } from 'react';
import { useCountdown } from './useCountdown';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const [pulseAlert, setPulseAlert] = useState(false);

  const formattedHours = hours === 0 ? '0' : hours.toString().padStart(2, '0');
  const formattedMinutes =
    minutes === 0 ? '0' : minutes.toString().padStart(2, '0');
  const formattedSeconds =
    seconds === 0 ? '0' : seconds.toString().padStart(2, '0');

  useEffect(() => {
    const remainingTimeInSeconds =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    if (remainingTimeInSeconds <= 900) {
      setPulseAlert(true);
    } else {
      setPulseAlert(false);
    }
  }, [days, hours, minutes, seconds]);

  return (
    <div
      className={`text-white flex justify-between gap-10 text-center ${
        pulseAlert ? 'ex-5-its-comming-now' : ''
      }`}
    >
      <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="text-5xl">{!isNaN(days) ? days : ''}</p>
        <p className="txt-sm">Days</p>
      </div>
      <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="text-5xl">
          {!isNaN(formattedHours) ? formattedHours : ''}
        </p>
        <p className="txt-sm">Hours</p>
      </div>
      <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="text-5xl">
          {!isNaN(formattedMinutes) ? formattedMinutes : ''}
        </p>
        <p className="txt-sm">Minutes</p>
      </div>
      <div className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <p className="text-5xl">
          {formattedSeconds >= 0 ? formattedSeconds : ''}
        </p>
        <p className="txt-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
