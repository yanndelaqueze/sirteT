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
  const [darkMode, setDarkMode] = useState(false);

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

  function resetBoard() {
    setRows(20);
    setColumns(10);
  }

  function start() {
    resetGameOver();
  }

  function setMode() {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  return (
    <div className={s.container}>
      {gameOver ? (
        <>
          <img src={logo} alt="" className={s.logo} />
          <Menu onClick={start} />
          <Settings
            onClickAdd={increaseBoard}
            onClickRemove={decreaseBoard}
            onClickReset={resetBoard}
            rows={rows}
            columns={columns}
            onClickColorMode={setMode}
            onClickDarkMode={setMode}
            darkMode={darkMode}
          />
        </>
      ) : (
        <Sirtet
          rows={rows}
          columns={columns}
          setGameOver={setGameOver}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
