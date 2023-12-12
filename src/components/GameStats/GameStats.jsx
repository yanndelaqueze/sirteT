import s from "./style.module.css";
import { memo } from "react";

export const GameStats = memo(({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel, totalLines } =
    gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className={`${s.game_stats} ${s.game_stats}`}>
      <li>Level</li>
      <li className={s.value}>{level}</li>
      <li>Lines to next level</li>
      <li className={s.value}>{linesToLevel}</li>
      <li>Points</li>
      <li className={s.value}>{points}</li>
      <li>Total Lines</li>
      <li className={s.value}>{totalLines}</li>
    </ul>
  );
});
