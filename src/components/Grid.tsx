import React, { FunctionComponent, useMemo } from 'react'
import classNames from 'classnames'

import { Cell, getCell } from '../types'

import styles from './Grid.module.css'
import CellElement from './Cell'

interface Props {
  width: number
  height: number
  data: Cell[]
}

const cellSize = 20

const greatestCommonDivisor = (a: number, b: number): number => {
  if (b === 0) return a
  return greatestCommonDivisor(b, a % b)
}

const Grid: FunctionComponent<Props> = ({ height, width, data }) => {
  const rows = Array.from({ length: height })
  const columns = Array.from({ length: width })

  const gcd = useMemo(() => greatestCommonDivisor(height, width), [height, width])
  const isDivider = (index: number): boolean => index !== 0 && index % gcd === 0

  return (
    <div className={styles.container}>
      <svg viewBox={[0, 0, cellSize * width, cellSize * height].join(' ')}>
        <g name="cells">
          {rows.map((_, index) =>
            columns.map((_, j) => (
              <CellElement
                key={j}
                cell={getCell(data, width, j, index)}
                x={cellSize * j}
                y={cellSize * index}
                size={cellSize}
              />
            ))
          )}
        </g>
        <g name="row-lines">
          {rows.map((_, index) => (
            <line
              x1="0%"
              x2="100%"
              y1={cellSize * index}
              y2={cellSize * index}
              key={index}
              className={classNames(styles.line, isDivider(index) && styles.divider)}
            />
          ))}
          <line x1="0%" x2="100%" y1={cellSize * height} y2={cellSize * height} className={styles.line} />
        </g>
        <g name="column-lines">
          {columns.map((_, index) => (
            <line
              x1={cellSize * index}
              x2={cellSize * index}
              y1="0%"
              y2="100%"
              key={index}
              className={classNames(styles.line, isDivider(index) && styles.divider)}
            />
          ))}
          <line x1={cellSize * width} x2={cellSize * width} y1="0%" y2="100%" className={styles.line} />
        </g>
      </svg>
    </div>
  )
}

export default Grid
