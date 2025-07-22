# Climbing the LeaderBoard

An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses [Dense Ranking](https://en.wikipedia.org/wiki/Ranking#Dense_ranking_.28.221223.22_ranking.29), so its leaderboard works like this:

- The player with the highest score is ranked number 1 on the leaderboard.
- Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

**Example**

ranked = [100, 90, 90, 80]
player = [70, 80, 105]

The ranked players will have ranks **_1_**, **_2_**, **_2_**, and **_3_**, respectively. If the player's scores are **_70_**, **_80_** and **_105_**, their rankings after each game are **_4th_**, **_3rd_** and **_1st_**. Return **_[4, 3, 2]_**.

**Function Description**

climbingLeaderboard has the following parameter(s):

- int ranked[n]: the leaderboard scores
- int player[m]: the player's scores

**Returns**

- int[m]: the player's rank after each new score

**Input Format**

The first line contains an integer **_n_**, the number of players on the leaderboard.

The next line contains **_n_** space-separated integers **_ranked[i]_**, the leaderboard scores in decreasing order.

The next line contains an integer **_m_**, the number games the player plays.

The last line contains **_m_** space-separated integers **_player[j]_**, the game scores.

**Constraints**

- 1 <= n <= 2 x 10^5
- 1 <= m <= 2 x 10^5
- 1 <= ranked[i] <= 10^9 for 0 <= i < n
- 1 <= player[j] <= 10^9 for 0 <= j < n
- The existing leaderboard, **_ranked_**, is in descending order.
- The player's scores, **_player_**, are in ascending order.

**Subtask**

For 60% of the maximum score:

- 1 <= n <= 200
- 1 <= m <= 200
