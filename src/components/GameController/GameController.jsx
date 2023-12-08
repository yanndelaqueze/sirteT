import s from "./style.module.css";
import { Action, actionForKey } from "../../business/Input";
import { playerController } from "../../business/PlayerController";

export function GameController({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) {
  function onKeyUp({ code }) {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    }
  }

  function onKeyDown({ code }) {
    const action = actionForKey(code);
    handleInput({ action });
  }

  function handleInput({ action }) {
    playerController({
      action,
      board: board,
      player: player,
      setPlayer: setPlayer,
      setGameOver: setGameOver,
    });
  }
  return (
    <input
      className={s.game_controller}
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
}
