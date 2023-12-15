import s from "./style.module.css";

export function Menu({ onClick, darkMode }) {
  function getButton() {
    if (darkMode) {
      return (
        <button className={s.button_dark} onClick={onClick}>
          Play
        </button>
      );
    } else {
      return (
        <button className={s.button} onClick={onClick}>
          Play
        </button>
      );
    }
  }

  return <div className={s.container}>{getButton()}</div>;
}
