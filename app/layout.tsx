'use client'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'chakra-ui-carousel'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ChakraProvider>
      <Provider>{children}</Provider> </ChakraProvider></body>
    </html>
  )
}
