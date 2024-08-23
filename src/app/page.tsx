'use client'

import { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'

const Grid = dynamic(() => import('../components/Grid'), { ssr: false })

const Page: NextPage = () => <Grid width={10} height={10} />

export default Page
