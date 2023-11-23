import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar'

export const metadata: Metadata = {
  title: 'Crypto Currency App',
  description: 'Currency app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Crypto Currency App</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
