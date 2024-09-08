'use client'

import React, { FunctionComponent, useState } from 'react'

import { Cell } from '../types'

import Grid from './Grid'
import Controls from './Controls'

interface Props {
  height: number
  width: number
  initialData: Cell[]
}

const Game: FunctionComponent<Props> = ({ height, width, initialData }) => {
  const [data, setData] = useState(initialData)
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
