'use client'

import React, { FunctionComponent, useState } from 'react'

import { Cell, getColumnCells, getRowCells, toGroups } from '../utils/cells'
import { iter } from '../utils/array'

import Grid from './Grid'
import Controls from './Controls'

interface Props {
  height: number
  width: number
  solution: Cell[]
}

const Game: FunctionComponent<Props> = ({ height, width, solution }) => {
  const rowRequirements = iter(height, y => toGroups(getRowCells(solution, width, y)))
  const colRequirements = iter(width, x => toGroups(getColumnCells(x, solution, width)))

  // eslint-disable-next-line no-console
  console.log(rowRequirements, colRequirements)

  const [data, setData] = useState(iter(height * width, () => Cell.Empty))
  const [mode, setMode] = useState<Cell.Filled | Cell.Flagged>(Cell.Filled)

  const handleCellClick = (x: number, y: number) => {
    const index = y * width + x
    const newData = [...data]
    newData[index] = data[index] !== mode ? mode : Cell.Empty
    setData(newData)
  }

  return (
    <div>
      <Grid width={width} height={height} data={data} onCellClick={handleCellClick} />
      <Controls mode={mode} onModeChange={setMode} />
    </div>
  )
}

export default Game
