import s from "./style.module.css";
import { Board } from "../Board/Board";
import { GameStats } from "../GameStats/GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import { Previews } from "../Previews/Previews";
import { GameController } from "../GameController/GameController";

export function Sirtet({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();

  const [player, setPlayer, resetPlayer] = usePlayer();
  console.log("player:", player);

  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className={s.sirtet}>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
}
