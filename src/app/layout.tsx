'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import StyledJsxRegistry from './registry'
import React from 'react'
// import AuthProvider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledJsxRegistry>
      <body>
      {/* <AuthProvider> */}
 {children}
 {/* </AuthProvider> */}
        </body>       
        </StyledJsxRegistry>
    </html>
  )
}
