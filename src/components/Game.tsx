'use client'

import React, { FunctionComponent, useState } from 'react'
import classNames from 'classnames'

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

  const rows = iter(height, y => {
    const dataGroups = toGroups(getRowCells(data, width, y))
    const groups = rowRequirements[y].map((group, i) => ({
      value: group,
      isValid: group === dataGroups[i],
    }))

    return {
      groups,
      isValid: groups.every(group => group.isValid),
      isDirty: dataGroups.length > 0,
    }
  })

  const columns = iter(width, x => {
    const dataGroups = toGroups(getColumnCells(x, data, width))
    const groups = colRequirements[x].map((group, i) => ({
      value: group,
      isValid: group === dataGroups[i],
    }))

    return {
      groups,
      isValid: groups.every(group => group.isValid),
      isDirty: dataGroups.length > 0,
    }
  })

  const handleCellClick = (x: number, y: number) => {
    const index = y * width + x
    const newData = [...data]
    newData[index] = data[index] !== mode ? mode : Cell.Empty
    setData(newData)
  }

  return (
    <div className={styles.container}>
      <div className={styles.columnHints}>
        {columns.map(({ groups, isDirty, isValid }, index) => (
          <div key={index} className={classNames(styles.hint, isDirty && !isValid && styles.error)}>
            {groups.map((group, i) => (
              <span key={i} className={classNames(styles.hintValue, group.isValid && styles.satisfied)}>
                {group.value}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.rowHints}>
        {rows.map(({ groups, isDirty, isValid }, index) => (
          <div key={index} className={classNames(styles.hint, isDirty && !isValid && styles.error)}>
            {groups.map((group, i) => (
              <span key={i} className={classNames(styles.hintValue, group.isValid && styles.satisfied)}>
                {group.value}
              </span>
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
