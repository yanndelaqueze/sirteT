import { Menu } from "../Menu/Menu";
import s from "./style.module.css";

export function Game({ rows, columns }) {
  function start() {
    console.log("clicked");
  }
  return (
    <div>
      <Menu onClick={start} />
    </div>
  );
}
