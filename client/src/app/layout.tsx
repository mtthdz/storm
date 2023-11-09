'use client'

import GlobalStyles from "./_styles/GlobalStyles"
import Providers from "./Providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  )
}
