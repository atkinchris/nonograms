import { FunctionComponent } from 'react'

import { Cell } from '../utils/cells'

import { Filled, Flagged } from './Cell'
import styles from './Controls.module.css'

interface Props {
  mode: Cell.Filled | Cell.Flagged
  onModeChange: (mode: Cell.Filled | Cell.Flagged) => void
}

const Controls: FunctionComponent<Props> = ({ mode, onModeChange }) => {
  const handleModeChange = () => {
    onModeChange(mode === Cell.Filled ? Cell.Flagged : Cell.Filled)
  }

  return (
    <div className={styles.controls}>
      <button onClick={handleModeChange} className={styles.cellButton}>
        <svg>{mode === Cell.Filled ? Filled : Flagged}</svg>
      </button>
    </div>
  )
}

export default Controls
