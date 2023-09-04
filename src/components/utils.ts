export const wordLength = 5;

export function testCharMatch(
  guess: string,
  answer: string,
  setDone: React.Dispatch<React.SetStateAction<boolean>>,
) {
  let count = 0;
  let matchResult: string[] = new Array(wordLength).fill('');
  let availableChars = answer;
  let usedIndex: number[] = [];
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
    if (
      answer.includes(currentLetter) &&
      availableChars.includes(currentLetter) &&
      !usedIndex.includes(i)
    ) {
      matchResult.splice(i, 1, `${currentLetter}: 1`);
      count += 1;
      availableChars = availableChars.replace(currentLetter, '');
      usedIndex.push(i);
    } else if (!usedIndex.includes(i)) {
      matchResult.splice(i, 1, `${currentLetter}: 0`);
      usedIndex.push(i);
    }
  }
  if (count === wordLength * 2) setDone(true);
  return matchResult;
}
