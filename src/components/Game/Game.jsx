import { Menu } from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver";
import s from "./style.module.css";

export function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
    console.log("Start", gameOver);
  }
  return (
    <div>
      <Menu onClick={start} />
    </div>
  );
}
