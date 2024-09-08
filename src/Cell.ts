const enum Cell {
  Empty,
  Filled,
}

const getCell = (data: number[], width: number, x: number, y: number): Cell => {
  const index = y * width + x
  return data[index]
}

export { Cell, getCell }
