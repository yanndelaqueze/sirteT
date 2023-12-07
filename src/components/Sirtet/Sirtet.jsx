import s from "./style.module.css";
import { Board } from "../Board/Board";
import { GameStats } from "../GameStats/GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { Previews } from "../Previews/Previews";

export function Sirtet({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });
  const player = { tetrominoes: [] };

  return (
    <div className={s.sirtet}>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
}
