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
      return <Wifi className={`stroke-green-400 ${props.className}`} />;
    case "emf":
      return (
        <SmartphoneCharging className={`stroke-red-500 ${props.className}`} />
      );
    case "freezing":
      return (
        <ThermometerSnowflake className={`stroke-sky-300 ${props.className}`} />
      );
    case "orbs":
      return <Dice2 className={`stroke-amber-100 ${props.className}`} />;
    case "spirit":
      return <Ghost className={`stroke-orange-500 ${props.className}`} />;
    case "uv":
      return <Fingerprint className={`stroke-teal-300 ${props.className}`} />;
    case "writing":
      return <BookOpen className={`stroke-amber-800 ${props.className}`} />;
  }
};

export default EvidenceIcon;
