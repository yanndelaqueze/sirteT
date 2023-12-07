import { useState } from "react";
import { buildBoard } from "../business/Board";

export function useBoard({ rows, columns }) {
  const [board] = useState(buildBoard({ rows, columns }));

  return [board];
}
