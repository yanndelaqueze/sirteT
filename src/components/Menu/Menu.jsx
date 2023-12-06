import s from "./style.module.css";

export function Menu({ onClick }) {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onClick}>
        Play sirteT
      </button>
    </div>
  );
}
