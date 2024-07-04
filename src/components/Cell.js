const Cell = ({ id, cell, go, setGo, cells, setCells, gameOver }) => {
  const handleClick = (e) => {
    if (gameOver) return

    const isTaken =
      e.target.firstChild?.classList.contains("circle") ||
      e.target.firstChild?.classList.contains("cross") ||
      e.target.classList.contains("circle") ||
      e.target.classList.contains("cross")

    if (!isTaken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle")
        handleCellChange("circle")
        setGo("cross")
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross")
        handleCellChange("cross")
        setGo("circle")
      }
    }
  }

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell
      }
    })
    setCells(nextCells)
  }

  return (
    <div className="cell" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Cell
