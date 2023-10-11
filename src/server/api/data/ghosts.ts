import { EVIDENCE as E } from "./evidence";
import { type IGhost } from "./types";

const forced = true;

export const GHOSTS: Record<string, IGhost> = {
  spirit: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.spirit },
      { evidence: E.writing },
    ],
    name: "Spirit",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  wraith: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.spirit },
      { evidence: E.dots },
    ],
    name: "Wraith",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  phantom: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.uv },
      { evidence: E.dots },
    ],
    name: "Phantom",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  polter: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.spirit },
      { evidence: E.writing },
    ],
    name: "Poltergeist",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  banshee: {
    evidence: [{ evidence: E.uv }, { evidence: E.orbs }, { evidence: E.dots }],
    name: "Banshee",
    huntSanity: 50,
    huntSpeed: [1.7],
    description: "Targets specific player",
    maxHuntSanity: 87,
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
  },
  mare: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.writing },
    ],
    name: "Mare",
    huntSanity: 60,
    huntSpeed: [1.7],
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
  },
  shade: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Shade",
    huntSanity: 35,
    huntSpeed: [1.7],
  },
  demon: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.writing },
      { evidence: E.freezing },
    ],
    name: "Demon",
    huntSanity: 70,
    huntSpeed: [1.7],
    maxHuntSanity: 100,
  },
  yurei: {
    evidence: [
      { evidence: E.orbs },
      { evidence: E.freezing },
      { evidence: E.dots },
    ],
    name: "Yurei",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  oni: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.freezing },
      { evidence: E.dots },
    ],
    name: "Oni",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  yokai: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.dots },
    ],
    name: "Yokai",
    huntSanity: 50,
    huntSpeed: [1.7],
    maxHuntSanity: 80,
  },
  hantu: {
    evidence: [
      { evidence: E.uv },
      { evidence: E.orbs },
      { evidence: E.freezing, forced },
    ],
    name: "Hantu",
    huntSanity: 50,
    huntSpeed: [1.4, 2.7],
  },
  goryo: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv },
      { evidence: E.dots, forced },
    ],
    name: "Goryo",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  myling: {
    evidence: [
      { evidence: E.emf },
      { evidence: E.uv },
      { evidence: E.writing },
    ],
    name: "Myling",
    huntSanity: 50,
    huntSpeed: [1.7],
  },
  onryo: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.orbs },
      { evidence: E.freezing },
    ],
    name: "Onryo",
    huntSanity: 60,
    huntSpeed: [1.7],
    maxHuntSanity: 100,
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
    huntSpeed: [1.7],
  },
  mimic: {
    evidence: [
      { evidence: E.spirit },
      { evidence: E.uv },
      { evidence: E.freezing },
      { evidence: E.orbs, forced },
    ],
    name: "The Mimic",
    huntSanity: 50,
    huntSpeed: [0.4, 3.71],
    maxHuntSanity: 100,
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
    huntSpeed: [0.4, 3],
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
