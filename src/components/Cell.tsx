import React, { FunctionComponent } from 'react'

import { Cell } from '../types'

import styles from './Cell.module.css'

interface Props {
  cell: Cell
  x: number
  y: number
  size: number
  onClick: () => void
}

const CellElement: FunctionComponent<Props> = ({ cell, x, y, size, onClick }) => (
  <svg x={x} y={y} width={size} height={size}>
    {cell === Cell.Filled && <rect className={styles.filled} width="80%" height="80%" x="10%" y="10%" rx="5" />}
    {cell === Cell.Flagged && (
      <g className={styles.flagged}>
        <line x1="20%" y1="80%" x2="80%" y2="20%" />
        <line x1="20%" y1="20%" x2="80%" y2="80%" />
      </g>
    )}
    <rect fill="transparent" width="100%" height="100%" onClick={onClick} />
  </svg>
)

export default CellElement
