import s from "./style.module.css";

export function Settings({
  onClickAdd,
  onClickRemove,
  rows,
  columns,
  onClickReset,
}) {
  return (
    <div className={s.container}>
      <h1>GAME SETTINGS</h1>
      <div className={s.board_size}>
        <h2 className="text-center">Board Size</h2>
        <div className={s.size_adjust}>
          <div className={s.add} onClick={onClickAdd}>
            +
          </div>
          <div className={s.size}>
            {rows} x {columns}
          </div>
          <div className={s.remove} onClick={onClickRemove}>
            -
          </div>
        </div>
        <div className={s.reset} onClick={onClickReset}>
          <h3>Reset</h3>
        </div>
      </div>
    </div>
  );
}
