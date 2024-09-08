const enum Cell {
  Empty,
  Filled,
  Flagged,
}

const getCell = (data: number[], width: number, x: number, y: number): Cell => {
  const index = y * width + x
  return data[index]
}

const toGroups = (cells: Cell[]): number[] =>
  cells
    .join('')
    .split(Cell.Empty.toString())
    .map(group => group.length)
    .filter(group => group > 0)

const getRowCells = (data: Cell[], width: number, row: number): Cell[] => data.slice(row * width, (row + 1) * width)

const getColumnCells = (col: number, data: Cell[], width: number): Cell[] => data.filter((_, i) => i % width === col)

export { getRowCells, getColumnCells, getCell, toGroups, Cell }
