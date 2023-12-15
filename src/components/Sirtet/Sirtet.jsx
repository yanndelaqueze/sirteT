import s from "./style.module.css";
import { Board } from "../Board/Board";
import { GameStats } from "../GameStats/GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";
import { usePlayer } from "../../hooks/usePlayer";
import { Previews } from "../Previews/Previews";
import { GameController } from "../GameController/GameController";

export function Sirtet({ rows, columns, setGameOver, darkMode, startLevel }) {
  const [gameStats, addLinesCleared] = useGameStats(startLevel);

  const [player, setPlayer, resetPlayer] = usePlayer(darkMode);
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
      <div className={`col-4 ${s.game_stats}`}>
        <GameStats gameStats={gameStats} />
      </div>
      <div className={`col-4 ${s.board}`}>
        <Board board={board} darkMode={darkMode} />
      </div>
      <div className={`col-4 ${s.previews}`}>
        <Previews tetrominoes={player.tetrominoes} darkMode={darkMode} />
      </div>
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
