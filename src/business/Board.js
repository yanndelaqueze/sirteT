import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export function buildBoard({ rows, columns }) {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
}

export function nextBoard({ board, player, resetPlayer, addLinesCleared }) {
  const { tetromino, position } = player;

  // Copy and clear spaces used by pieces that
  // hadn't collided and occupied spaces permanently

  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position: position,
    rows: rows,
    shape: tetromino.shape,
  });

  // If we collided, reset the player!
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  // Return the next board
  return {
    rows,
    size: { ...board.size },
  };
}

export function hasCollision({ board, position, shape }) {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

export function isWithinBoard({ board, position, shape }) {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
}
