/*
  input :
    guess: list of colors
    secret: list of colors
  output:
    list of pegs
    peg:
      '0' = correct color, wrong location
      'X' = correct color AND location
*/

/*
input = guess: [R, B, G, Y], secret: [R, B, G, Y] -> [X, X, X, X]
input = guess: [R, B, G, G], secret: [R, B, G, Y] -> [X, X, X]
input = guess: [B, B, B, B], secret: [R, B, G, Y] -> [0, X, 0, 0]
input = guess: [Y, Y, Y, Y], secret: [R, B, G, G] -> []
input = guess: [Y, R, R, Y], secret: [R, B, G, G] -> [0]
*/

export function getPegs(guess: string[], secret: string[]): string[] {
  const pegs: string[] = [];

  for (let i = 0; i < guess.length; i++) {
    const g = guess[i];
    const s = secret[i];

    const isCorrectColorAndLocation = g === s;
    const isCorrectColor = secret.includes(g);

    if (isCorrectColorAndLocation) {
      pegs.push('X');
      continue;
    }

    if (isCorrectColor) {
      pegs.push('0');
      continue;
    }
  }

  return pegs;
}
