import s from "./style.module.css";
import { Menu } from "../Menu/Menu";
import { Sirtet } from "../Sirtet/Sirtet";
import { useGameOver } from "../../hooks/useGameOver";
import { useState } from "react";
import { Settings } from "../Settings/Settings";

export function Game() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [rows, setRows] = useState(20);
  const [columns, setColumns] = useState(10);

  function increaseRows() {
    setRows((prevRows) => prevRows + 2);
    setColumns((prevColumns) => prevColumns + 1);
  }

  function decreaseRows() {
    if (rows <= 14) {
      return;
    } else {
      setRows((prevRows) => prevRows - 2);
      setColumns((prevColumns) => prevColumns - 1);
    }
  }

  function start() {
    resetGameOver();
  }

  console.log("rows:", rows);
  console.log("cols:", columns);
  return (
    <div className={s.container}>
      {gameOver ? (
        <>
          <Menu onClick={start} />
          <Settings
            onClickAddRows={increaseRows}
            onClickRemoveRows={decreaseRows}
          />
        </>
      ) : (
        <Sirtet rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
