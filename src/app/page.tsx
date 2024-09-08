import { NextPage } from 'next'
import React from 'react'

import Grid from '../components/Grid'
import { Cell } from '../types'

const Page: NextPage = () => {
  const width = 8
  const height = 12
  const data: Cell[] = Array.from({ length: height * width }).map(() => {
    if (Math.random() > 0.5) return Cell.Filled
    if (Math.random() > 0.5) return Cell.Flagged
    return Cell.Empty
  })

  return <Grid width={width} height={height} data={data} />
}

export default Page
