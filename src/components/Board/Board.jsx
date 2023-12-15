import s from "./style.module.css";
import { BoardCell } from "../BoardCell/BoardCell";

export function Board({ board, darkMode }) {
  function boardStyles() {
    if (darkMode) {
      return {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
        background: "black",
        border: "10px solid grey",
      };
    } else {
      return {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
        background: "#580aff",
        border: "10px solid #ffd300",
      };
    }
  }

  return (
    <div className={s.board} style={boardStyles()}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
}
