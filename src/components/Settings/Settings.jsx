import s from "./style.module.css";

export function Settings({ onClickAdd, onClickRemove }) {
  return (
    <div>
      <h1>GAME SETTINGS</h1>
      <div className={s.add} onClick={onClickAdd}>
        BIGGER +
      </div>
      <div className={s.remove} onClick={onClickRemove}>
        SMALLER -
      </div>
    </div>
  );
}
