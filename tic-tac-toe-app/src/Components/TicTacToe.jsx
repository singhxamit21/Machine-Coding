import React, { useState } from 'react'
import Board from './Board'
import { checkWinner, initialState } from '../Utlis/ticTacToeUtlis';


const TicTacToe = ({size=3}) => {
  const [board,setBoard] = useState(initialState(size))

  const [turnX,setTurnX] = useState(true)

  const winner = checkWinner(board,size)


  const status = winner ? `Winner is ${winner}` : turnX ? "Player X turn" : "Player O turn"
  
  const handleClick = (rowIdx,colIdx) => {
    if(board[rowIdx][colIdx] || winner){
      return;
    }
    const deepCopyOfBoard = JSON.parse(JSON.stringify(board))
    deepCopyOfBoard[rowIdx][colIdx] = turnX ? "X" : "O";
    setBoard(deepCopyOfBoard)
    setTurnX(!turnX)
  }

  const handleRest = () => {
    setBoard(initialState(size))
  }
  return (
    <div className='container'>
        <Board handleClick={handleClick} board={board} size={size} />
        <div className='status'>{status}</div>
        <button onClick={handleRest}>Reset</button>
    </div>
  )
}

export default TicTacToe