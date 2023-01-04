/*
const rankingScores = [100, 90, 90, 80]
const playerScores = [70, 80, 105]

return [4, 3, 1]

-------------------------------------------------------
playerRanking = []
playerScores = [70, 80]
playerScore = 105
uniques = 0

for
(LOOP 1)
  i = 0
  rankingScore = 100
  previousRankingScore = undefined

  if rankingScore !== previousRankingScore /  100 !== undefined --> NO
    uniques = 1

    while  playerScore >= rankingScore  /  105 >= 100 --> YES
      playerRanking = [1]
      playerScores = [70]
      playerScore = 80

    if i (0) === rankingScores.length (4) - 1  (3) /  0 === 0 --> NO

(LOOP 2)
  i = 1
  rankingScore = 90
  previousRankingScore = 100

  if currentRankingScoreIsEqualToThePreviousOne  /  90 !== 100 --> NO
    uniques = 2

    while  playerScore >= rankingScore  /  105 >= 100  --> YES
      playerRanking = [1]
      playerScores = [70]
      playerScore = 80

    if i (1) === rankingScores.length (4) - 1  (3) /  1 === 3 --> NO
*/

export function climbingLeaderBoard(rankingScores: number[], playerScores: number[]): number[] | undefined {
  let playerRanking = [];

  for (let i = 0, playerScore = playerScores.pop(), uniques = 0; i < rankingScores.length; ++i) {
    let rankingScore = rankingScores[i];
    const previousRankingScore = rankingScores[i - 1];

    if (rankingScore !== previousRankingScore) {
      ++uniques;

      while (playerScore && playerScore >= rankingScore) {
        playerRanking.unshift(uniques);
        playerScore = playerScores.pop();
      }

      if (!playerScore) {
        continue;
      }

      if (i == rankingScores.length - 1) {
        playerRanking.unshift(...new Array(playerScores.length + 1).fill(++uniques));
      }
    }
  }

  return playerRanking;
}
