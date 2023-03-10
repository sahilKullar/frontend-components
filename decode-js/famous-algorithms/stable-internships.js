function stableInternships(interns, teams) {
  const chosenInterns = {};
  const freeIntern = interns.map((_, i) => i);
  const currentInternChoices = new Array(interns.length).fill(0);

  const teamsMap = [];
  for (let team of teams) {
    const rank = {};
    team.forEach((intern_num, i) => (rank[intern_num] = i));
    teamsMap.push(rank);
  }

  while (freeIntern.length > 0) {
    const internNum = freeIntern.pop();
    const intern = interns[internNum];
    const teamPreference = intern[currentInternChoices[internNum]];
    currentInternChoices[internNum]++;
    if (!(teamPreference in chosenInterns)) {
      chosenInterns[teamPreference] = internNum;
      continue;
    }
    const previousIntern = chosenInterns[teamPreference];
    const previousInternRank = teamsMap[teamPreference][previousIntern];
    const currentInternRank = teamsMap[teamPreference][internNum];

    if (currentInternRank < previousInternRank) {
      freeIntern.push(previousIntern);
      chosenInterns[teamPreference] = internNum;
    } else {
      freeIntern.push(internNum);
    }
  }
  return Object.entries(chosenInterns).map(([team, intern]) => [
    intern,
    parseInt(team),
  ]);
}

interns = [
  [0, 1, 2],
  [1, 0, 2],
  [1, 2, 0],
];
teams = [
  [2, 1, 0],
  [1, 2, 0],
  [0, 2, 1],
];

console.log(stableInternships(interns, teams));
