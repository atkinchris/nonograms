import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Viewport } from 'next'

import './global.css'

export const metadata = {
  title: 'Nonograms',
}

interface LayoutProps extends PropsWithChildren {
  children: React.ReactNode
}

const RootLayout: FunctionComponent<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <header>
        <h1>{metadata.title}</h1>
      </header>
      <main>{children}</main>
    </body>
  </html>
)

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default RootLayout
