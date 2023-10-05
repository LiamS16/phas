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
import type { evidence } from "~/server/api/data/evidence";

interface IProps {
  id: evidence;
}

const EvidenceIcon = (props: IProps): JSX.Element => {
  //   return <Wifi className="h-6 w-6 stroke-white" />;
  switch (props.id) {
    case "dots":
      return <Wifi className="stroke-green-400" />;
    case "emf":
      return <SmartphoneCharging className="stroke-red-500" />;
    case "freezing":
      return <ThermometerSnowflake className="stroke-sky-300" />;
    case "orbs":
      return <Dice2 className="stroke-amber-100" />;
    case "spirit":
      return <Ghost className="stroke-orange-500" />;
    case "uv":
      return <Fingerprint className="stroke-teal-300" />;
    case "writing":
      return <BookOpen className="stroke-amber-800" />;
  }
};

export default EvidenceIcon;
