import { NextPage } from 'next'
import React from 'react'

import { Cell } from '../types'
import Game from '../components/Game'

const Page: NextPage = () => {
  const width = 8
  const height = 12
  const data: Cell[] = Array.from({ length: height * width }).map(() => {
    if (Math.random() > 0.5) return Cell.Filled
    if (Math.random() > 0.5) return Cell.Flagged
    return Cell.Empty
  })

  return <Game width={width} height={height} initialData={data} />
}

export default Page
