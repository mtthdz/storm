'use client'

import GlobalStyles from "./_styles/GlobalStyles"
import Providers from "./Providers"

/**
 * Next layout component
 * Handles both HTML head and body tags
 * 
 * @param param0 children components
 * @returns jsx
 */
export default function RootLayout({
  children
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
