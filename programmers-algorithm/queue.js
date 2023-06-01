function solution2(priorities, location) {
  let answer = 0;

  while (true) {
    const mostPriorNum = Math.max(...priorities);

    if (priorities[0] === mostPriorNum) {
      answer++;
      if (location === 0) return answer;
      priorities.shift();
    } else {
      priorities.push(priorities[0]);
      priorities.shift();
    }

    location === 0 ? (location = priorities.length - 1) : location--;
  }
}
