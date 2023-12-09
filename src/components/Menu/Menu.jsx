import s from "./style.module.css";
import logo from "../../assets/images/logo.png";

export function Menu({ onClick }) {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onClick}>
        Play
      </button>
    </div>
  );
}
