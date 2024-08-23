import React, { FunctionComponent, PropsWithChildren } from 'react'

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

export default RootLayout
