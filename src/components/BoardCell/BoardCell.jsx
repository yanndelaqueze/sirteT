import s from "./style.module.css";

export function BoardCell({ cell }) {
  console.log(s.board_cell);
  return (
    <div className={`${s.board_cell} ${cell.className}`}>
      <div className={s.sparkle}></div>
    </div>
  );
}
