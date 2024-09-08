import Square from "./Square";

// Board Component
const Board = ({ size, squares, onClick }) => {
    // Generate the grid dynamically based on the chosen size
    const renderBoard = () => {
      let board = [];
      for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
          row.push(renderSquare(i * size + j));
        }
        board.push(
          <div key={i} className="board-row">
            {row}
          </div>
        );
      }
      return board;
    };
  
    const renderSquare = (i) => {
      return (
        <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
      );
    };
  
    return <div>{renderBoard()}</div>;
  }

  export default Board;