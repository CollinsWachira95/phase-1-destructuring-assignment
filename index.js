// index.js

// Destructuring Strings
const animalSounds = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

const animalNames = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  little: 'chicken'
};

const { bessie, dolly, babe, little } = animalNames;

const animalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};

const { blackAndWhite, black, pink } = animalColors;

// Destructuring Arrays
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

const [r, o, y, g, b, , v] = rainbowColors;

const [, , , , , indg] = rainbowColors;

// Destructuring Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit',
  songs: [
    'The Rainbow Connection',
    'Moving Right Along',
    'Bein\' Green',
    'I Hope That Something Better Comes Along'
  ],
  nested: {
    job: 'Host of The Muppet Show',
    partner: 'Miss Piggy'
  }
};

const { muppetName, color, song, job, partner } = muppet;
const { songs: [, song2, , song4], nested: { job: nestedJob, partner: nestedPartner } } = muppet;

module.exports = {
  moo,
  neigh,
  baa,
  oink,
  cluck,
  bessie,
  dolly,
  babe,
  little,
  blackAndWhite,
  black,
  pink,
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
  r,
  o,
  y,
  g,
  b,
  v,
  indg,
  muppetName,
  color,
  song,
  job,
  partner,
  song2,
  song4,
  nestedJob,
  nestedPartner
};
