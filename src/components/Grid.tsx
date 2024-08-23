import React from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import { useMeasure } from '@uidotdev/usehooks'

import styles from './Grid.module.css'

interface Props {
  width: number
  height: number
}

const cellSize = 20
const cellPadding = 5

const Grid: React.FunctionComponent<Props> = ({ height, width }) => {
  const baseWidth = (cellSize + cellPadding) * width - cellPadding
  const baseHeight = (cellSize + cellPadding) * height - cellPadding
  const [ref, bounds] = useMeasure()
  const data = Array.from({ length: height * width }, (_, i) => i)

  const stageWidth = bounds.width ?? baseWidth
  const stageHeight = bounds.height ?? baseHeight
  const scale = stageWidth / baseWidth

  return (
    <div ref={ref} className={styles.container}>
      <Stage width={stageWidth} height={stageHeight} scaleX={scale} scaleY={scale}>
        <Layer>
          {data.map((item, index) => (
            <Rect
              x={(cellSize + cellPadding) * (index % width)}
              y={(cellSize + cellPadding) * Math.floor(index / width)}
              width={cellSize}
              height={cellSize}
              fill="red"
              key={index}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default Grid
