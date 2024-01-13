
// Array which contains 6 random (unique) numbers
const luckyCombination = [];

while(luckyCombination.length < 6){
  // Geneartes random number between 1 and 90
  let randNum = Math.floor((Math.random() * 90) + 1);
  if(luckyCombination.indexOf(randNum) === -1) luckyCombination.push(randNum); 
}

// Array which contains lucky phrases
const luckyPhrase = ['Wishing you lots of luck!', 'Finger crossed!', 'Break a leg!!!', 'Wish you luck!!!', 'Best of luck!!!']

// Picks a random lucky phrase
let phrase = luckyPhrase [Math.floor(Math.random() * luckyPhrase.length)];

// Emoji array
const emoji = ['🍀', '🥠', '🤞'];

// Picks a random emoji
let randoMoji = emoji [Math.floor(Math.random() * emoji.length)];

console.log(`FORTUNITE lottery\n\nYour lucky combination is:\n\n${luckyCombination.join(' - ')}\n\n${phrase} ${randoMoji}`);