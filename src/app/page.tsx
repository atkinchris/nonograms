import { NextPage } from 'next'
import React from 'react'

import Grid from '../components/Grid'
import { Cell } from '../Cell'

const Page: NextPage = () => {
  const width = 8
  const height = 12
  const data: Cell[] = Array.from({ length: height * width }).map(() =>
    Math.random() > 0.5 ? Cell.Filled : Cell.Empty
  )

  return <Grid width={width} height={height} data={data} />
}

export default Page
