let currentPlayer = 'X';

function markCell(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;

    if (checkWinner()) {
      resetGame();
    } else {
      switchPlayer();
    }
  }
}

function switchPlayer() {
if (currentPlayer === 'X'){
currentPlayer='O';
}
else
{ 
currentPlayer='X'
}
}

function checkWinner() {
  const cells = document.querySelectorAll('.cell');
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      const winnerText = document.getElementById('winnerText');
      winnerText.textContent = `Player ${currentPlayer} wins!`;
      document.getElementById('winnerPopup').style.display = 'flex';

      return true;
    }
  }

  return false;
}

function closePopup() {
  document.getElementById('winnerPopup').style.display = 'none';
}

function resetGame() {
  document.querySelectorAll('.cell').forEach((cell) => (cell.textContent = ''));
  currentPlayer = 'X';
}
