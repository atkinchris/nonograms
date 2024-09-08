'use client'

import React, { FunctionComponent, useState } from 'react'

import { Cell } from '../types'

import Grid from './Grid'

interface Props {
  height: number
  width: number
  initialData: Cell[]
}

const Game: FunctionComponent<Props> = ({ height, width, initialData }) => {
  const [data, setData] = useState(initialData)
  const handleCellClick = (x: number, y: number) => {
    const index = y * width + x
    const newData = [...data]
    newData[index] = data[index] === Cell.Empty ? Cell.Filled : Cell.Empty
    setData(newData)
  }

  return <Grid width={width} height={height} data={data} onCellClick={handleCellClick} />
}

export default Game
