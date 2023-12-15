import { useState, useCallback } from "react";

const buildGameStats = (startLevel) => ({
  level: startLevel,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
  totalLines: 0,
});

export function useGameStats(startLevel) {
  const [gameStats, setGameStats] = useState(buildGameStats(startLevel));

  const addLinesCleared = useCallback((lines) => {
    setGameStats((previous) => {
      const totalLines = previous.totalLines + lines;
      const newLinesCompleted = previous.linesCompleted + lines;
      let points = previous.points;
      switch (lines) {
        case 1:
          points = previous.points + previous.level * 100;
          break;
        case 2:
          points = previous.points + previous.level * 300;
          break;
        case 3:
          points = previous.points + previous.level * 500;
          break;
        case 4:
          points = previous.points + previous.level * 800;
          break;
        default:
          points = previous.points;
          break;
      }
      // const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      return {
        level: level,
        linesCompleted: linesCompleted,
        linesPerLevel: linesPerLevel,
        points: points,
        totalLines: totalLines,
      };
    }, []);
  }, []);

  return [gameStats, addLinesCleared];
}
