import s from "./style.module.css";

export function Settings({ onClickAddRows, onClickRemoveRows }) {
  return (
    <div>
      <div className={s.add} onClick={onClickAddRows}>
        ADD
      </div>
      <div className={s.remove} onClick={onClickRemoveRows}>
        REMOVE
      </div>
    </div>
  );
}
