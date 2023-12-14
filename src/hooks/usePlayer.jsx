import { useState, useCallback } from "react";
import { randomTetromino } from "../business/Tetrominoes";

function buildPlayer(previous, darkMode) {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino(darkMode));
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino(darkMode));
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
}

export function usePlayer(darkMode) {
  const [player, setPlayer] = useState(buildPlayer(undefined, darkMode));

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev, darkMode));
  }, [darkMode]);
  return [player, setPlayer, resetPlayer];
}
