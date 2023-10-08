import type { GhostSpeed } from "~/modules/ghosts/types/types";

export const modSpeed = (prev: GhostSpeed[], speed: GhostSpeed) => {
  const i = prev.indexOf(speed);

  if (i !== -1) prev.splice(i, 1);
  else prev.push(speed);

  return prev;
};
