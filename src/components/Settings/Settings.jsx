import s from "./style.module.css";

export function Settings({
  onClickAdd,
  onClickRemove,
  rows,
  columns,
  onClickReset,
  onClickColorMode,
  onClickDarkMode,
  darkMode,
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
          <h5>Reset</h5>
        </div>
      </div>
      <div className={s.mode}>
        <h2 className="text-center">Mode</h2>
        <div className={s.dark_mode}>
          {darkMode && <h4>→</h4>}
          <h4 onClick={onClickColorMode}>Dark Mode</h4>
        </div>
        <div className={s.color_mode}>
          {!darkMode && <h4>→</h4>}
          <h4 onClick={onClickDarkMode}>Color Mode</h4>
        </div>
      </div>
    </div>
  );
}
