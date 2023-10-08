import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const useTimer = (
  seconds: number,
): [expires: number | null, () => void] => {
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [timeDelta, setTimeDelta] = useState<number | null>(null);
  const [isCounting, toggleIsCounting] = useState<boolean>(false);

  const startTimer = () => {
    const now = dayjs().utc();
    now.add(seconds, "seconds");
    setEndDate(now);
    toggleIsCounting(true);
  };

  useEffect(() => {
    const timeDeltaUpdate = () => {
      if (!isCounting) return;

      const delta = endDate?.millisecond() ?? 0 - new Date().getTime();

      if (delta !== null && delta < 1) {
        toggleIsCounting(false);
        setTimeDelta(null);
      } else setTimeDelta(delta);
    };

    const timeDeltaUpdateInterval = setInterval(timeDeltaUpdate, 1000);

    return () => {
      clearInterval(timeDeltaUpdateInterval);
    };
  }, [endDate, isCounting]);

  return [timeDelta, startTimer];
};
