import s from "./style.module.css";
import { Action, actionForKey, actionIsDrop } from "../../business/Input";
import { playerController } from "../../business/PlayerController";
import { useInterval } from "../../hooks/useInterval";
import { useDropTime } from "../../hooks/useDropTime";

export function GameController({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  function onKeyUp(e) {
    const action = actionForKey(e.key);
    if (actionIsDrop(action)) resumeDropTime();
  }

  function onKeyDown(e) {
    const action = actionForKey(e.key);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  }

  function handleInput({ action }) {
    playerController({
      action: action,
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
