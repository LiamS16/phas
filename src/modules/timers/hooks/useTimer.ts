import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const useTimer = (
  seconds: number,
): {
  expires: number | null;
  startTimer: () => void;
  isCounting: boolean;
  endTimer: () => void;
} => {
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [timeDelta, setTimeDelta] = useState<number | null>(null);
  const [isCounting, toggleIsCounting] = useState<boolean>(false);
  const [, triggerReRender] = useState<boolean>(false);

  const startTimer = () => {
    let now = dayjs().utc();
    now = now.add(seconds + 1, "seconds");
    setEndDate(now);
    toggleIsCounting(true);
  };

  const endTimer = () => {
    toggleIsCounting(false);
    setTimeDelta(null);
  };

  useEffect(() => {
    const timeDeltaUpdate = () => {
      if (!isCounting || endDate === null) return;

      const delta = endDate.unix() * 1000 - new Date().getTime();

      if (delta < 1) endTimer();
      else setTimeDelta(delta);

      triggerReRender((prev) => !prev);
    };

    const timeDeltaUpdateInterval = setInterval(timeDeltaUpdate, 1000);

    return () => {
      clearInterval(timeDeltaUpdateInterval);
    };
  }, [endDate, isCounting]);

  return {
    endTimer,
    expires: timeDelta ?? null,
    isCounting,
    startTimer,
  };
};
