import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  remainingTime?: number;
  setReset: Dispatch<SetStateAction<boolean>>;
}

const useTimer = (
  initialTime: number,
  timeoutCallback?: () => void
): TimerState => {
  const [remainingTime, setRemainingTime] = useState<number>(initialTime);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 10);
    }

    if (reset) {
      // @ts-ignore
      clearInterval(timer);
    }
    if (remainingTime === 0 && timeoutCallback) {
      timeoutCallback();
    }
    return () => {
      clearInterval(timer);
    };
  }, [remainingTime, reset]);

  const hours = Math.floor(remainingTime / 360000);
  // Minutes calculation
  const minutes = Math.floor((remainingTime % 360000) / 6000);
  // Seconds calculation
  const seconds = Math.floor((remainingTime % 6000) / 100);
  if (remainingTime === 0 && timeoutCallback) {
    timeoutCallback();
  }

  return { hours, minutes, seconds, remainingTime, setReset };
};

export default useTimer;
