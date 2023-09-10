export const wordLength = 5;

export function checkCharMatch(guess: string, answer: string) {
  let count = 0;
  let matchResult: string[] = new Array(wordLength).fill('');
  let availableChars = answer;
  let usedIndex: number[] = [];
  // check for exact matches
  for (let i = 0; i < guess.length; i++) {
    const currentLetter = guess[i];
    if (guess[i] === answer[i]) {
      matchResult.splice(i, 1, `${currentLetter}: 2`);
      count += 2;
      availableChars = availableChars.replace(currentLetter, '');
      usedIndex.push(i);
    }
  }
  for (let i = 0; i < guess.length; i++) {
    const currentLetter = guess[i];
    // check for existing letters
    if (
      answer.includes(currentLetter) &&
      availableChars.includes(currentLetter) &&
      !usedIndex.includes(i)
    ) {
      matchResult.splice(i, 1, `${currentLetter}: 1`);
      count += 1;
      availableChars = availableChars.replace(currentLetter, '');
      usedIndex.push(i);
    }
    // no match for current letter
    else if (!usedIndex.includes(i)) {
      matchResult.splice(i, 1, `${currentLetter}: 0`);
      usedIndex.push(i);
    }
  }
  return matchResult;
}

export function checkWordMatch(newGuess: string, answer: string) {
  return newGuess === answer;
}

export function getWord(wordList: string[]) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

export function getCurrentGuess(guessArr: string[]) {
  return guessArr.join('').replace(/[^a-zA-Z]+/g, '');
}

export const wordList = [
  'apple',
  'amend',
  'audio',
  'bagel',
  'basil',
  'beard',
  'bison',
  'bread',
  'camel',
  'cargo',
  'chair',
  'clean',
  'crumb',
  'dance',
  'donut',
  'dozen',
  'earth',
  'elbow',
  'equal',
  'fancy',
  'fluff',
  'flute',
  'fuzzy',
  'front',
  'fruit',
  'gecko',
  'ghost',
  'giant',
  'grain',
  'guava',
  'hippo',
  'honey',
  'house',
  'jewel',
  'juice',
  'jello',
  'kitty',
  'koala',
  'large',
  'lemon',
  'light',
  'loyal',
  'metal',
  'micro',
  'moose',
  'motor',
  'music',
  'nacho',
  'night',
  'noise',
  'olive',
  'otter',
  'orbit',
  'pasta',
  'peach',
  'pizza',
  'puppy',
  'proof',
  'quark',
  'query',
  'quiet',
  'radio',
  'razor',
  'reply',
  'river',
  'salad',
  'scene',
  'sloth',
  'snail',
  'sugar',
  'syrup',
  'table',
  'thumb',
  'turbo',
  'toast',
  'torus',
  'trout',
  'video',
  'water',
  'wheat',
  'wheel',
  'wrist',
  'yeast',
  'young',
  'zebra',
];
