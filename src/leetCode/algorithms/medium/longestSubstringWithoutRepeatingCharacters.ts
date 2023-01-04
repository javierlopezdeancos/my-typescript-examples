export function lengthOfLongestSubstring(s: string): number {
  let substring: string[] = [];
  let sizeOfLongestSubstring: number = 0;

  const stringCharacters = [...s];

  for (let i = 0; i < stringCharacters.length; i++) {
    const stringCharacter = stringCharacters[i];
    const characterIsRepeatedInTheLastSubstringCharacterCompared =
      substring?.length > 0 ? substring[substring.length] === stringCharacter : false;

    if (characterIsRepeatedInTheLastSubstringCharacterCompared) {
      substring = [];
      substring.push(stringCharacter);
      continue;
    }

    /*
    const characterIsRepeatedInSubstring = substring.includes(stringCharacter);

    if (characterIsRepeatedInSubstring) {
      if (s === 'dvdf') console.log(stringCharacter);

      const charactersToMoveIntoNextSubstring: string[] = [];

      charactersToMoveIntoNextSubstring.push(stringCharacter);

      for (let j = substring.length; j = 0; j--) {
        if (s === 'dvdf') console.log(charactersToMoveIntoNextSubstring);

        const subStringCharacter = substring[j];

        if (subStringCharacter === stringCharacter) {
          break;
        }

        charactersToMoveIntoNextSubstring.unshift(subStringCharacter);
      }
    }
    */

    substring.push(stringCharacter);

    if (substring.length > sizeOfLongestSubstring) {
      sizeOfLongestSubstring = substring.length;
    }
  }

  return sizeOfLongestSubstring;
}

// is repeated in the last character compared
// is repeated but not in the last character compared
