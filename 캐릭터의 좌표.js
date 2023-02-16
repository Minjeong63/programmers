function solution(keyinput, board) {
  let answer = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    if (answer[0] <= Math.floor(board[0] / 2) - 1 && keyinput[i] === "right")
      answer[0] += 1;
    else if (
      answer[0] >= -Math.floor(board[0] / 2) + 1 &&
      keyinput[i] === "left"
    )
      answer[0] -= 1;
    else if (answer[1] <= Math.floor(board[1] / 2) - 1 && keyinput[i] === "up")
      answer[1] += 1;
    else if (
      answer[1] >= -Math.floor(board[1] / 2) + 1 &&
      keyinput[i] === "down"
    )
      answer[1] -= 1;
  }
  return answer;
}
