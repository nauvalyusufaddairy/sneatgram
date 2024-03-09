/**
 *
 * @param initialTime current time in UTC format
 * @param expireTime in miliseconds
 */ import { useState, useEffect } from "react";

interface StopwatchTime {
  hours: number;
  minutes: number;
  seconds: number;
}

const useStopwatch = (
  initialTime: number = 0
): [StopwatchTime, () => void, () => void, boolean] => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      //@ts-ignore
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds: number): StopwatchTime => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return { hours, minutes, seconds };
  };

  return [formatTime(time), handleStartStop, handleReset, isRunning];
};

export default useStopwatch;
