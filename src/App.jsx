import { Game } from "./components/Game/Game";
import { useState } from "react";

export function App() {
  const [rows, setRows] = useState(20);
  const [columns, setColumns] = useState(10);

  return (
    <>
      <Game rows={rows} columns={columns} />
    </>
  );
}
