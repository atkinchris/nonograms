import { NextPage } from 'next'
import React from 'react'

import Game from '../components/Game'
import { Cell } from '../utils/cells'

const Page: NextPage = () => {
  const width = 8
  const height = 12
  const data: Cell[] = Array.from({ length: height * width }).map(() => {
    if (Math.random() > 0.5) return Cell.Filled
    return Cell.Empty
  })

  return <Game width={width} height={height} solution={data} />
}

export default Page
