import "./style.css"
import { useState } from "react";


function Square({value, squareClicked}){
  
  
  return <button className="tiles" onClick={squareClicked}>{value}</button>
}


function TicTacToe(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){

    if (checkWinner(squares) || squares[i]) {
      return;
    }

    const copySquares = squares.slice()
    if (xIsNext){
      copySquares[i] = 'x'
    }
    else{
      copySquares[i] = 'O'
    } 
    setSquares(copySquares)
    setXIsNext(!xIsNext)   
  }

  function checkWinner(squares){
    const checkLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let i = 0; i < checkLines.length; i++){
        const [a, b, c] = checkLines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          //console.log(`${squares[a]} won`)
          return squares[a]
        }
    }
  }


  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } 
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return ( 
      
      <>
        <h1 className="title">Tic Tac Toe</h1>
        <div className="container">
        
          <div className="row">
            <Square value={squares[0]} squareClicked={() => handleClick(0)}></Square>
            <Square value={squares[1]} squareClicked={() => handleClick(1)}></Square>
            <Square value={squares[2]} squareClicked={() => handleClick(2)}></Square>
          </div>

          <div className="row">
            <Square value={squares[3]} squareClicked={() => handleClick(3)}></Square>
            <Square value={squares[4]} squareClicked={() => handleClick(4)}></Square>
            <Square value={squares[5]} squareClicked={() => handleClick(5)}></Square>
          </div>

          <div className="row">
            <Square value={squares[6]} squareClicked={() => handleClick(6)}></Square>
            <Square value={squares[7]} squareClicked={() => handleClick(7)}></Square>
            <Square value={squares[8]} squareClicked={() => handleClick(8)}></Square>
          </div>  
                
        </div>
      </>
    );
}  

export default TicTacToe
