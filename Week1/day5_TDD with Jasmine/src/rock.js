
function rock (ans1, ans2) {
  var player1 = 0
  var player2 = 0
  if (ans2 === undefined) {
    ans2 = (Math.random() * 100)
    if (ans2 <= 33) {
      ans2 = 'paper'
    } else if (ans2 <= 66) {
      ans2 = 'rock'
    } else {
      ans2 = 'scissor'
    }
  }
  if (ans1 !== 'rock' && ans1 !== 'paper' && ans1 !== 'scissor') {
    return 'Error, you should enter a valid arg'
  } else if (ans2 !== 'rock' && ans2 !== 'paper' && ans2 !== 'scissor') {
    return 'Error, you should enter a valid arg'
  }
  if (ans1 === ans2) {
    return 'tie'
  }
  if (ans1 === 'paper' && ans2 === 'scissor') {
    player2 += 1
    return 'scissor wins'
  } else if (ans1 === 'scissor' && ans2 === 'paper') {
    player1 += 1
    return 'scissor wins'
  }
  if (ans1 === 'paper' && ans2 === 'rock') {
    player2 += 1
    return 'paper wins'
  } else if (ans1 === 'rock' && ans2 === 'paper') {
    player1 += 1
    return 'paper wins'
  }
  if (ans1 === 'scissor' && ans2 === 'rock') {
    player2 += 1
    return 'rock wins'
  } else if (ans1 === 'rock' && ans2 === 'scissor') {
    player1 += 1
    return 'rock wins'
  }
}
