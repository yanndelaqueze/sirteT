import s from "./style.module.css";

import { buildBoard } from "../../business/Board";
import { transferToBoard } from "../../business/Tetrominoes";
import { memo } from "react";

import { BoardCell } from "../BoardCell/BoardCell";

export const Preview = memo(({ tetromino, index, darkMode }) => {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });
  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  function previewBoardStyle() {
    if (darkMode) {
      return {
        background: "black",
        border: "10px solid grey",
      };
    } else {
      return {
        background: "#580aff",
        border: "10px solid #ffd300",
      };
    }
  }

  return (
    <div className={s.preview} style={style}>
      <div className={s.preview_board} style={previewBoardStyle()}>
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
});
