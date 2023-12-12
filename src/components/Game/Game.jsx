import s from "./style.module.css";
import { Menu } from "../Menu/Menu";
import { Sirtet } from "../Sirtet/Sirtet";
import { useGameOver } from "../../hooks/useGameOver";
import { useState } from "react";
import { Settings } from "../Settings/Settings";
import logo from "../../assets/images/logo.png";

export function Game() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [rows, setRows] = useState(20);
  const [columns, setColumns] = useState(10);

  function increaseBoard() {
    if (rows >= 50) {
      return;
    } else {
      setRows((prevRows) => prevRows + 2);
      setColumns((prevColumns) => prevColumns + 1);
    }
  }

  function decreaseBoard() {
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

  return (
    <div className={s.container}>
      {gameOver ? (
        <>
          <div className={s.logo}>
            <img src={logo} alt="" />
          </div>
          <Menu onClick={start} />
          <Settings
            onClickAdd={increaseBoard}
            onClickRemove={decreaseBoard}
            rows={rows}
            columns={columns}
          />
        </>
      ) : (
        <Sirtet rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
