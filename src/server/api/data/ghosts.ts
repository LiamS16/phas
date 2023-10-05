import { BEHAVIOUR as B } from "./behaviour";
import { EVIDENCE as E } from "./evidence";
import { type IGhost } from "./types";

const forced = true;
const hidden = true;

export const GHOSTS: Record<string, IGhost> = {
  spirit: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.spirit },
      { evidence: E.writing },
    ],
    name: "Spirit",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  wraith: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.spirit },
      { evidence: E.dots },
    ],
    name: "Wraith",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  phantom: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.uv },
      { evidence: E.dots },
    ],
    name: "Phantom",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  polter: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.spirit },
      { evidence: E.writing },
    ],
    name: "Poltergeist",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  banshee: {
    evidence: [{ evidence: E.uv }, { evidence: E.orbs }, { evidence: E.dots }],
    name: "Banshee",
    huntSanity: 50,
    huntSpeed: 1.7,
    description: "Targets specific player",
  },
  jinn: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv },
      { evidence: E.freezing },
    ],
    name: "Jinn",
    huntSanity: 50,
    huntSpeed: [1.7, 2.5],
    behaviourThatExcludes: [B.turnOffBreaker],
  },
  mare: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.writing },
    ],
    name: "Mare",
    huntSanity: [60, 40],
    huntSpeed: 1.7,
  },
  rev: {
    evidence: [
      { evidence: E.orbs },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Revenant",
    huntSanity: 50,
    huntSpeed: [1, 3],
    huntTraits: [B.speedsUpNearPlayer],
  },
  shade: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Shade",
    huntSanity: 35,
    huntSpeed: 1.7,
    behaviourThatExcludes: [B.huntsWPlayerInRoom],
  },
  demon: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Demon",
    huntSanity: 100,
    huntSpeed: 1.7,
    behaviourThatReveals: B.lowIncense,
  },
  yurei: {
    evidence: [
      { evidence: E.orbs },
      { evidence: E.freezing },
      { evidence: E.dots },
    ],
    name: "Yurei",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  oni: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.freezing },
      { evidence: E.dots },
    ],
    name: "Oni",
    huntSanity: 50,
    huntSpeed: 1.7,
    behaviourThatExcludes: [B.exhale],
  },
  yokai: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.dots },
    ],
    name: "Yokai",
    huntSanity: 50,
    huntSpeed: 1.7,
    behaviourThatReveals: B.huntWhenTalking,
  },
  hantu: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.orbs },
      { evidence: E.freezing, forced },
    ],
    name: "Hantu",
    huntSanity: 50,
    huntSpeed: [1.7, 2.7],
    behaviourThatExcludes: [B.turnOnBreaker],
    huntTraits: [B.speedsUpInCold],
  },
  goryo: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv },
      { evidence: E.dots, forced },
    ],
    name: "Goryo",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  myling: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv },
      { evidence: E.writing },
    ],
    name: "Myling",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  onryo: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.freezing },
    ],
    name: "Onryo",
    huntSanity: 60,
    huntSpeed: 1.7,
  },
  twins: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.spirit },
      { evidence: E.freezing },
    ],
    name: "The Twins",
    huntSanity: 50,
    huntSpeed: [1.53, 1.87],
  },
  raiju: {
    evidence: [
      { evidence: E.emf, forced },
      { evidence: E.orbs, forced },
      { evidence: E.dots },
    ],
    name: "Raiju",
    huntSanity: 65,
    huntSpeed: [1.7, 2.5],
  },
  obake: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv, forced },
      { evidence: E.orbs },
    ],
    name: "Obake",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  mimic: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.uv },
      { evidence: E.freezing },
      { evidence: E.orbs, hidden, forced },
    ],
    name: "The Mimic",
    huntSanity: 100,
    huntSpeed: [0.4, 3.71],
  },
  moroi: {
    evidence: [
      { evidence: E.spirit, forced },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Moroi",
    huntSanity: 50,
    huntSpeed: [1.5, 3.71],
  },
  deo: {
    evidence: [
      { evidence: E.spirit, forced },
      { evidence: E.writing },
      { evidence: E.dots },
    ],
    name: "Deogen",
    huntSanity: 50,
    huntSpeed: 1.7,
  },
  thaye: {
    evidence: [
      { evidence: E.orbs },
      { evidence: E.writing, forced },
      { evidence: E.dots, forced },
    ],
    name: "Thaye",
    huntSanity: 75,
    huntSpeed: [1, 2.75],
  },
};
