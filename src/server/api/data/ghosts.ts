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
    description:
      "When a Spirit is smudged it will prevent the spirit from hunting again for 180 seconds, instead of the normal 90 seconds for most other ghosts. (60 seconds for demon)",
    tells: "Smudge hunt prevention lasts for 180s ",
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
    description:
      "Wraith will never step in salt and is not affected by the Tier 3 salt mechanics. Wraith can teleport silently to a player outside of a ghost event. When it does so, it will leave an EMF reading at the player location then walk back to it's room. After teleporting, Wraith can interact with objects, do ghost events, or even hunt before going back to it's room. Wraith can be found pretty far from it's favorite room. ",
    tells:
      "Cannot disturb salt piles. Teleports to player outside of an event and gives EMF.\nIs not affected by the Tier 3 Salt mechanics. ",
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
    description:
      "Phantom will disappear immediately after taking a photo of it during a ghost event, and often continue making noise while invisible. When taking a photo of the Phantom in the DOTS state, it will also disappear. The ghost will not show up in the actual photo. When hunting it will be more invisible while flashing than other ghosts. Phantoms like to follow players around. To help keep the phantom near its room, have all party members stick together. This will make evidence and objectives easier to get. ",
    tells:
      "Disappears when ghost event photo taken. Will walk to player and give emf. Less visible during hunt.",
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
    description:
      "The Poltergeist has a chance to throw many objects at once, greatly decreasing player sanity by 2% per item thrown. Poltergeist also throws objects more often than other ghosts both normally and during the hunt. It has a 100% chance to throw an object nearby during a hunt every .5 seconds, compared to 50% for other ghosts. In the Apocalypse update, Polty was given the Oni ability to throw things harder. It can now throw things at a power of 2-6 compared to 0-3 for all other ghosts. To determine Poltergeist, make piles of multiple items and see if it throws all at once. ",
    tells: "Throws multiple objects at once. Throws a lot during hunts.",
  },
  banshee: {
    evidence: [{ evidence: E.uv }, { evidence: E.orbs }, { evidence: E.dots }],
    name: "Banshee",
    huntSanity: 50,
    huntSpeed: [1.7],
    description:
      "The Banshee will only target one player for the duration of the run as long as that player is alive and inside the house. If the target is outside the house, the banshee will hunt normally. If the player dies, Banshee will select a new target.\nBanshee tells- Ignores non targets during the hunt. Has a unique Parabolic sound. Increased chance for singing ghost events. Ignores average sanity and can hunt when target is at or below 50%. This means that under the right circumstances, Banshee can hunt at 87% group sanity if it's target is at 50% and all other members are at 100%. Will often stalk its target while wandering.",
    maxHuntSanity: 87,
    tells:
      "Unique parabolic mic scream. Follows target player-set up motions sensors. ",
    huntsAt:
      "Banshee hunts based off of target's sanity. Hunts at 50% target sanity. Ignores average sanity.",
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
    description:
      "When targeting a player during a hunt, the Jinn is faster when power is on. When it gets within 3m of the player, the Jinn will slow down. Jinn also has the ability to zap 25% sanity instantly when near the player and the breaker is on. It will give EMF reading at the breaker when using its sanity drain ability. Turing off the breaker will disable both of these abilities. Jinn cannot directly turn off the breaker.",
    tells:
      "When breaker is on, Jinn is fast when player in LOS, slows down when close. 25% sanity drain gives emf at breaker. Jinn cannot directly turn off the breaker.",
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
    description:
      "Mare likes to turn lights off. They cannot turn lights on at the switch. Mare has a higher chance for breaking light event. It wanders more if lights are on in it's room. Mare has a chance to immediately switch off a light that has been turned on. To check for mare in NM mode, pay attention to light switching. Bait it by turning on lights and seeing if it will instantly turn them off.",
    huntsAt:
      "Mare can hunt at 60% if the lights are off, but not until 40% if the lights are on near the mare.",
    tells:
      "Favors light exploding events. Will not turn on lights. Chance to turn off light immediately when turning one on.",
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
    tells:
      "Slow hunt speed when player location is unknown.  Instant speed when sensing player.",
    description:
      "Revenant will be very slow when player location is not known. (1m/s). When player locations is known, however, it will instantly speed to 3m/s. After reaching last known location, it will slow back down gradually if target is not found. Very distinct, slow footsteps when player locations is unknown. The best way to determine if you have a revenant is through the hunt. ",
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
    tells:
      "Favors shadow events. Overall less active. Will not hunt if player is in room with ghost.",
    description:
      "Shade has lowered activity overall.  Will more often show up in shadow form for ghost events. Less likely to show full ghost model. Ghost event chance increases the lower the average sanity gets. Will not throw or use objects if you are in the same room as the ghost. (Ghost writing is an exception) Boring ghost? Probably a Shade.",
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
    tells:
      "Early hunter. 20 second min hunt cool down. Smudge hunt prevention lasts 60s minimum. ",
    huntsAt:
      "Demon can hunt at 70% naturally, with a rare chance to hunt at any sanity.",
    description:
      "Demon minimum cooldown between hunts is 20 seconds compared to the 25 second cooldown for all other ghosts. Smudging a demon outside of a hunt will only prevent it from hunting for 60 seconds compared to the usual 90 seconds for other ghosts (180 for spirit). Crucifix has a 50% increase to range for all tiers of crucifix. ",
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
    tells: "15% sanity drain with door close. Smudge traps ghost in room.",
    description:
      "Yurei has the ability to zap 15% sanity if nearby. If it uses its ability, it will also fully close a door in its room as a sign to check your sanity. When smudged, Yurei will be trapped in its room for a period of time.",
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
    tells:
      "Double sanity drain when touched by ghost event. More visible during hunts.",
    description:
      "Oni cannot do the 'ghost mist' ghost event and has a higher chance to show actual full form during ghost events. (not shadow or stealth). Always pay attention to which ghost events you get.\nNEW Oni will now drain double the sanity when a ghost event hits you. Will now flash less during a hunt causing it to be visible for longer.",
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
    tells: "More active when talking nearby. Early hunter when talking nearby.",
    huntsAt:
      "50% normally with a chance to hunt up to 80% when players nearby are talking.",
    description:
      "During a hunt, Yokai cannot detect your voice OR sense your equipment further than 2.5m away.  You can get much closer to the yokai with the music box before it will break. Ghost activity is increased when talking near a Yokai.",
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
    tells: "Speed fluctuation during hunt. Faster in colder areas.",
    description:
      "The lower the temps in the room, the quicker the Hantu will be.\n1.4 = 15°C+\n1.75 = 12°C\n2.1 = 9°C\n2.3 = 6°C\n2.5 = 3°C\n2.7 = 0°C\n(Speed in meters/second)\nNo Line of Sight speed increase. Hantu cannot turn the breaker on and has an increased chance to turn off the breaker. Hantu will produce freezing breath in any room during a hunt if the breaker is off. (see video below) Hantu will always have freezing temps in Nightmare mode.",
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
    tells: "Does not wander as far from its room. Cannot change favorite room.",
    description:
      "Goryo DOTS evidence can only be seen through the video camera. DOTS will not show if a player is in the same room, however, DOTS state can start outside of a room, and enter a room where a player is. This is why the journal says 'Goryo will 'usually' only show itself on camera if there are no people nearby.'  DOTS will always be one of the 2 evidences given for Goryo in Nightmare mode. Goryo will not leave its room as often as other ghosts, and can no longer change favorite rooms. If you see DOTS without the use of a video camera, you can rule out Goryo. ",
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
    tells:
      "Cannot hear ghost further than 12m during hunt. More frequent parabolic responses. ",
    description:
      "Myling can sneak up on you during a hunt! It can only be heard during the hunt at a range of 12 meters or less. This now includes both footsteps AND vocal hunt noises. All other ghosts can be heard up to 20 meters away. Myling can respond more frequently through the parabolic microphone. ",
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
    tells:
      "Lit flames nearby prevent hunt. Can force hunt by having ghost blow out 3 flames if not other flames are nearby.",
    huntsAt:
      "Hunts normally at 60% with a chance to hunt at 100% when extinguishing flames.",
    description:
      "Onryo cannot hunt within 4 meters of a flame, however if it blows 3 flames and there are no other flames within a 4m radius to prevent it from hunting, it will trigger a hunt at any sanity. The chance to blow out candles increases when a player dies.",
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
    tells:
      "Varying speeds between hunts. Interactions in multiple areas at once. ",
    description:
      "The twin ghost can interact with multiple objects in different rooms at the same time. Think of it as one ranged and one melee interaction together. It can hunt from either the melee location or the ranged location. When hunting from the ranged location, the hunt speed slightly faster (1.9), and the melee location hunt speed is slightly slower (1.5) than normal ghost speed of 1.7m/s.",
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
    tells: "Early hunt and fast hunt speed around active electronics. ",
    huntsAt: "50% normally. 65% when near active electronics. ",
    description:
      "Raiju will be very fast around powered player equipment. To benefit from the speed increase, Raiju needs to be within 6m of any powered piece of equipment on small maps. 8m on medium maps, and 10m on large maps.  Head cams are the only powered equipment that do not affect Raiju speeds.  When hunting, electronics will malfunction at 15m for Raiju, as opposed to 10m for every other ghost. To slow the Raiju down, turn off all electronics that you brought into the house.",
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
    tells: "Will briefly change ghost model during hunt.",
    description:
      "Obake is the only ghost that can produce 6 fingered fingerprints in addition to all other normal prints. While fingerprints will always be one of the 2 evidences on NM mode, it still has a 25% chance to not leave one when touching something. Obake can cut the duration of all remaining fingerprints in half if it uses it's ability. If Obake is suspected, pay close attention to FP.\n6 fingered prints in bottom right of image. NEW! Obake has learned to shape shift. It can flash a different ghost model for a brief second during the hunt. Look closely! ",
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
    tells:
      "Will show orbs when 0 evidence. Mimics any ghost abilities. Varying speeds between hunts. ",
    huntsAt:
      "The Mimic can hunt following the rules for whichever ghost it is mimicking at the time.",
    description:
      "The Mimic will copy the behavior of any ghost type both during the hunt as well as outside of the hunt. In Nightmare mode, the Mimic will show 2 of it's 3 evidence in addition to orbs. In all other modes, the mimic will show all 3 evidence, plus orbs. Evidence is the easiest way to determine if you have a mimic however often you may notice some of the more obvious traits of the ghosts it mimics. It will change what ghost it mimics every 30 seconds to 2 minutes  and can change several times a round.  Mimic cannot change behaviors mid hunt.",
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
    tells:
      "Faster when lower sanity. (starting below 45 sanity) Double sanity drain after getting parabolic response.",
    description:
      "Moroi will curse a player who gets spirit box or parabolic mic response with double the passive sanity drain. Lights and Candles do not stop the cursed sanity drain. When outside the house the curse is paused. Taking sanity pills will remove the curse. Smudging during the hunt will blind the Moroi for 7.5 seconds instead of 5 for all other ghosts. Moroi is faster the lower your sanity is, varying from 1.5 m/s at its slowest up to 2.25 m/s at its fastest. Test...if you get a spirit box response, grab a candle and head into the house. If candle does not slow sanity drain, it's a Moroi. Always has sprit box in Nightmare.",
  },
  deo: {
    evidence: [
      { evidence: E.spirit, forced },
      { evidence: E.writing },
      { evidence: E.dots },
    ],
    name: "Deogen",
    huntSanity: 40,
    huntSpeed: [0.4, 3],
    tells:
      "Cannot hide from Deo. Fast further away. Super slow when close to player. Visible for longer during hunts. ",
    description:
      "You can run, but you cannot hide! Deogen knows where you are at all times. Hunts at 40% sanity. Super fast when far away, but super slow when close to it's target. Can change targets mid hunt. No line of sight acceleration. Will be visible for longer during hunts. Has a unique spirit box sound. Decreased spirit box range for unique sound. Always has spirit box on nightmare mode.",
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
    tells:
      "Possible early hunter. Fast when not aged. Slow when aged. Ouija board will indicate an aged Thaye. ",
    huntsAt: "75% scaling to a minimum 15% after aging.",
    description:
      "Thaye ages as time goes on if there is a player nearby. Starting very active and aging to a very slow, inactive ghost. Hunting threshold, activity, speed, and ghost event chance will all decrease the longer you are near the ghost. Starting hunt threshold is 75% dropping all the way down to a minimum of 15%. Thaye lower its speed when it ages. Starting at 2.7m/s and lowering to a minimum of 1m/s\nEach age lowers the speed by 0.175m/s. No Line of sight acceleration.  When asking 'How old are you' on the ouija board, the Thaye will respond differently depending on it's age.",
  },
};
