import s from "./style.module.css";
import { memo } from "react";

export const GameStats = memo(({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className={`${s.game_stats} ${s.game_stats_right}`}>
      <li>Level</li>
      <li className={s.value}>{level}</li>
      <li>Lines to level</li>
      <li className={s.value}>{linesToLevel}</li>
      <li>Points</li>
      <li className={s.value}>{points}</li>
    </ul>
  );
});
