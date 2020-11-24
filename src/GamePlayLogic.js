
// let humanChoice = Player(click)
// let computerChoice = Computer(click).Math.rand(0, 1, 2)
computerPaper = 0
computerScissors = 1
computerPaper = 2


switch {
  case (humanChoice === humanRock && computerChoice === computerRock)
  // it is a tie 
    render(DisplayTie)
    break

  case (humanChoice === humanRock && computerChoice === computerPaper)
  // computer wins
    render(DisplayComputerWinner)
    break

  case (humanChoice === humanRock && computerChoice === computerScissors)
  // human wins
    render(DisplayHumanWinner)
    break

  //scissors
  case (humanChoice === humanScissors && computerChoice === computerScissors)
  // it is a tie 
    render(DisplayTie)
    break

  case (humanChoice === humanScissors && computerChoice === computerRock)
  // computer wins
    render(DisplayComputerWinner)
    break

  case (humanChoice === humanScissors && computerChoice === computerPaper)
  //human wins
    render(DisplayHumanWinner)
    break

  //paper
  case (humanChoice === humanPaper && computerChoice === computerPaper)
  // it is a tie 
    render(DisplayTie)
    break

  case (humanChoice === humanPaper && computerChoice === computerScissors)
  //computer wins
    render(DisplayComputerWinner)
    break

  case (humanChoice === humanPaper && computerChoice === computerRock)
  // human wins
    render(DisplayHumanWinner)
    break

}
