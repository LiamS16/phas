import dayjs, { type Dayjs } from "dayjs";
import { useEffect, useState } from "react";

export const useBpm = () => {
  const [speed, setSpeed] = useState<number>(0);
  const [bpm, setBpm] = useState<number>(0);
  const [taps, setTaps] = useState<Dayjs[]>([]);

  const handleTap = () => {
    const now = dayjs();
    console.log(now.toISOString());

    if (taps.at(0) === undefined || taps.at(0)!.unix() > now.unix() - 5000) {
      setTaps([now]);
      return;
    }

    setTaps((prev) => {
      prev.push(now);
      return prev;
    });
  };

  //   useEffect(() => {
  //     if (taps.length > 4) {
  //     }
  //   }, []);

  return { bpm, speed, handleTap };
};
