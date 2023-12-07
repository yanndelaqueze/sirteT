import s from "./style.module.css";
import { Board } from "../Board/Board";
import { GameStats } from "../GameStats/GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";

export function Sirtet({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });
  return (
    <div className={s.sirtet}>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  );
}
