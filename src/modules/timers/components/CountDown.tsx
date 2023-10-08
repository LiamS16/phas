import React, { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";

interface IProps {
  seconds: number;
}

const CountDown = (props: IProps): JSX.Element => {
  const [date, startTimer] = useTimer(props.seconds);

  return <time>{date?.toString().padStart(2, "0")}</time>;
};

export default CountDown;
