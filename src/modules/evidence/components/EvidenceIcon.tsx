import {
  BookOpen,
  Dice2,
  Fingerprint,
  Ghost,
  SmartphoneCharging,
  ThermometerSnowflake,
  Wifi,
} from "lucide-react";
import React from "react";
import type { evidence } from "~/server/api/data/types";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  id: evidence;
}

const EvidenceIcon = (props: IProps): JSX.Element => {
  switch (props.id) {
    case "dots":
      return (
        <Wifi
          className={`stroke-green-400 ${props.className}`}
          style={props.style}
        />
      );
    case "emf":
      return (
        <SmartphoneCharging
          className={`stroke-red-500 ${props.className}`}
          style={props.style}
        />
      );
    case "freezing":
      return (
        <ThermometerSnowflake
          className={`stroke-sky-500 ${props.className}`}
          style={props.style}
        />
      );
    case "orbs":
      return (
        <Dice2
          className={`stroke-amber-200 ${props.className}`}
          style={props.style}
        />
      );
    case "spirit":
      return (
        <Ghost
          className={`stroke-orange-500 ${props.className}`}
          style={props.style}
        />
      );
    case "uv":
      return (
        <Fingerprint
          className={`stroke-violet-600 ${props.className}`}
          style={props.style}
        />
      );
    case "writing":
      return (
        <BookOpen
          className={`stroke-amber-800 ${props.className}`}
          style={props.style}
        />
      );
  }
};

export default EvidenceIcon;
