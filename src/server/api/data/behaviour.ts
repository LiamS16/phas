import type { IBehaviour } from "./types";

const duringHunt = true;

export const BEHAVIOUR: Record<
  | "turnOffBreaker"
  | "turnOnBreaker"
  | "exhale"
  | "target"
  | "EMFAtBreaker"
  | "huntsWPlayerInRoom"
  | "lowCooldown"
  | "huntWhenTalking"
  | "speedsUpInCold"
  | "speedsUpNearPlayer"
  | "lowIncense",
  IBehaviour
> = {
  turnOffBreaker: {
    name: "Turned off breaker",
  },
  turnOnBreaker: {
    name: "Turned on breaker",
  },
  exhale: {
    name: "Ghost exhale",
  },
  target: {
    name: "Targeted player",
  },
  EMFAtBreaker: {
    name: "EMF 2 at breaker",
  },
  huntsWPlayerInRoom: {
    name: "Hunted with player in room",
  },
  lowCooldown: {
    name: "Hunted after 20s",
  },
  lowIncense: {
    name: "Incesing prevents hunt for 60 seconds",
  },
  huntWhenTalking: {
    name: "Hunt when sanity <80% and talking to ghost",
  },
  speedsUpInCold: {
    name: "Speeds up in favourite room",
    duringHunt,
  },
  speedsUpNearPlayer: {
    name: "Speeds up when in sight of player",
    duringHunt,
  },
};
