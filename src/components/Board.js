import React, { useState } from 'react'
import  Square  from './Square'
import "./Board.css"

const Board = ({squares, onClick}) =>  {
    
    // const [squares, setSquares] = useState(Array(9).fill(null));
    // // const [xIsNext, setXIsNext] = useState(true);
    // // // const status = `Next Player ${xIsNext ? 'X' : 'O'}`;
    // // const[number, setNumber] = useState(0);

    
    // const handleClick= (i) =>{
    //     const newsquares = squares.slice();
    //     if(calculateWinner(newsquares)||newsquares[i]){ 
    //         return;
        
    //     }
    //     newsquares[i]= xIsNext?'X':'O';

    //     setSquares(newsquares);
    //     setXIsNext(prev=>!prev);
    // ;

    // }
    const renderSquare=(i)=>{
        return <Square value={squares[i]} 
        onClick={()=>onClick(i)} />
    }



   
        return (
            <div className='board-wrapper'>
           
       
                    <div className="board-row">
                       
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
          
        )

        }

export default Board