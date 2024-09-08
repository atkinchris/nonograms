import React, { FunctionComponent } from 'react'

import styles from './Grid.module.css'

interface Props {
  width: number
  height: number
}

const cellSize = 20
const cellPadding = 5

const Grid: FunctionComponent<Props> = ({ height, width }) => {
  const data = Array.from({ length: height * width })

  return (
    <div className={styles.container}>
      <svg
        viewBox={[
          -cellPadding,
          -cellPadding,
          (cellSize + cellPadding) * width + cellPadding,
          (cellSize + cellPadding) * height + cellPadding,
        ].join(' ')}
      >
        {data.map((_, index) => (
          <rect
            x={(cellSize + cellPadding) * (index % width)}
            y={(cellSize + cellPadding) * Math.floor(index / width)}
            width={cellSize}
            height={cellSize}
            fill="red"
            key={index}
          />
        ))}
      </svg>
    </div>
  )
}

export default Grid
