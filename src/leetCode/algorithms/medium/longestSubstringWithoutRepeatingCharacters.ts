export function lengthOfLongestSubstring(s: string): number {
  const stringLength = s.length;

  let longestLength = 0;

  for (var i = 0; i < stringLength; i++) {
    // Default values in visited are false
    const visited = new Array(256);

    for (var j = i; j < stringLength; j++) {
      const currentCharacterIsVisited = visited[s.charCodeAt(j)] === true;

      if (currentCharacterIsVisited) {
        break;
      }

      // Update the result if this window is larger
      longestLength = Math.max(longestLength, j - i + 1);

      // mark current character as visited.
      visited[s.charCodeAt(j)] = true;
    }
  }

  return longestLength;
}
