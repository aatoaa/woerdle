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

export function checkScore(guess: string[]) {
  let res = false;
  let total = 0;
  guess.map((x) => {
    const points = +x.slice(-1);
    if (Number.isInteger(points)) {
      total += points;
    }
  });
  if (total === wordLength * 2) {
    res = true;
  }
  return res;
}
