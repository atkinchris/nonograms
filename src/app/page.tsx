'use client'

import { NextPage } from 'next'
import React from 'react'
import dynamic from 'next/dynamic'

const Grid = dynamic(() => import('../components/Grid'), { ssr: false })

const Page: NextPage = () => <Grid width={8} height={12} />

export default Page
