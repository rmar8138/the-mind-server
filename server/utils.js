const { sampleSize, range, sortBy, shuffle, chunk } = require("lodash");

// generate cards
const generateCards = ({ players, round }) => {
  const cards = sortBy(sampleSize(range(1, 101), players.length * round));

  const playerCards = chunk(shuffle(cards), round).map((cardSet) =>
    sortBy(cardSet)
  );

  return {
    cards,
    playerCards,
  };
};

module.exports = {
  generateCards,
};
