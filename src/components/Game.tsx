'use client'

import React, { FunctionComponent, useState } from 'react'

import { Cell, getColumnCells, getRowCells, toGroups } from '../utils/cells'
import { iter } from '../utils/array'

import Grid from './Grid'
import Controls from './Controls'
import styles from './Game.module.css'

interface Props {
  height: number
  width: number
  solution: Cell[]
}

const Game: FunctionComponent<Props> = ({ height, width, solution }) => {
  const rowRequirements = iter(height, y => toGroups(getRowCells(solution, width, y)))
  const colRequirements = iter(width, x => toGroups(getColumnCells(x, solution, width)))

  const [data, setData] = useState(solution)
  const [mode, setMode] = useState<Cell.Filled | Cell.Flagged>(Cell.Filled)

  const rows = iter(height, y => ({
    groups: rowRequirements[y],
    isValid: toGroups(getRowCells(data, width, y)).join('') === rowRequirements[y].join(''),
  }))

  const columns = iter(width, x => ({
    groups: colRequirements[x],
    isValid: toGroups(getColumnCells(x, data, width)).join('') === colRequirements[x].join(''),
  }))

  const handleCellClick = (x: number, y: number) => {
    const index = y * width + x
    const newData = [...data]
    newData[index] = data[index] !== mode ? mode : Cell.Empty
    setData(newData)
  }

  return (
    <div className={styles.container}>
      <div className={styles.columnHints}>
        {columns.map(({ groups }, index) => (
          <div key={index}>
            {groups.map((group, i) => (
              <span key={i}>{group}</span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.rowHints}>
        {rows.map(({ groups }, index) => (
          <div key={index}>
            {groups.map((group, i) => (
              <span key={i}>{group}</span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.gameGrid}>
        <Grid width={width} height={height} data={data} onCellClick={handleCellClick} />
      </div>
      <div className={styles.controls}>
        <Controls mode={mode} onModeChange={setMode} />
      </div>
    </div>
  )
}

export default Game
