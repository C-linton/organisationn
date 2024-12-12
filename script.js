const chessboard = document.getElementById('chessboard');

// Create the chessboard squares
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add((row + col) % 2 === 0 ? 'light-square' : 'dark-square');
    square.dataset.row = row;
    square.dataset.col = col;
    chessboard.appendChild(square);

    // Add click event listener
    square.addEventListener('click', () => {
      console.log(`Clicked on square: ${row}, ${col}`);
      // TODO: Implement game logic here
    });
  }
}