import s from "./style.module.css";
import { Menu } from "../Menu/Menu";
import { Sirtet } from "../Sirtet/Sirtet";
import { useGameOver } from "../../hooks/useGameOver";

export function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
  }
  return (
    <div className={s.container}>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Sirtet rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
