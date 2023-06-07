import { useEffect, useState } from "react";

type timeStageItemProps = {
  [key: number]: number;
};

type updateStageItemProps = {
  [key: number]: React.Dispatch<React.SetStateAction<number>>;
};

const useTimer = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState(0);

  const [stage, setStage] = useState(0);
  const [start, setStart] = useState(false);

  const options = ["Pomodoro", "Short Break", "Long Break"];

  const switchStage = (index: number) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are You Sure, you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
  };

  const getTime = (stage: number) => {
    const timeStage: timeStageItemProps = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage: updateStageItemProps = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setStart(false);
    setConsumedSecond(0);
    setSeconds(0);
    setPomodoro(25);
    setLongBreak(15);
    setShortBreak(5);
  };

  const playAlarm = () => {
    const alarm = new Audio("/audio/alarm-clock1.mp3");
    alarm.play();
  };

  const timeUp = () => {
    playAlarm();
    reset();
  };

  const clockTicking = () => {
    const minutes = getTime(stage);
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "Show waring" : null;
    };

    const pomoTimer = setInterval(() => {
      if (start) {
        setConsumedSecond((value) => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(pomoTimer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, start]);

  return {
    getTime,
    switchStage,
    stage,
    options,
    seconds,
    start,
    setStart,
  };
};

export default useTimer;
