import "./BoardCell.css";

export function BoardCell({ cell }) {
  return (
    <div className={`board_cell ${cell.className}`}>
      <div className="sparkle"></div>
    </div>
  );
}
