import s from "./style.module.css";

import { buildBoard } from "../../business/Board";
import { transferToBoard } from "../../business/Tetrominoes";

import { BoardCell } from "../BoardCell/BoardCell";

export function Preview({ tetromino, index }) {
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

  return (
    <div className={s.preview} style={style}>
      <div className={s.preview_board}>
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
}
