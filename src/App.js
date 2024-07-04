import { useState, useEffect } from "react"
import Cell from "./components/Cell"

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [winningMessage, setWinningMessage] = useState(null)
  const [go, setGo] = useState("circle")

  const message = `It is now ${go}'s turn`

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningCombos.forEach((combo) => {
      let circleWins = combo.every((cell) => cells[cell] === "circle")
      if (circleWins) {
        setWinningMessage("Circle wins!")
        return
      }

      let crossWins = combo.every((cell) => cells[cell] === "cross")
      if (crossWins) {
        setWinningMessage("Cross wins!")
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>

      <h2>{winningMessage || message}</h2>

      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            gameOver={winningMessage}
          />
        ))}
      </div>
    </div>
  )
}

export default App
