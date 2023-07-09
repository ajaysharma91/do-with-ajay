'use client'
import React, { ReactNode } from 'react'
import Navbar from '../../../components/navbar'
import { ThemeProvider } from 'styled-components'

export default function MainLayout({children}:{children:ReactNode}) {
  const [isLight,setIsLight] = React.useState(true)
  const lightTheme = {
    fg:'#000000',
    bg:'#f5f5f5',
    bs:'1px 2px 4px 2px rgba(12, 12, 12, 0.2)',
    border:'none',
    cardBg:'none'
  }
  const darkTheme = {
    fg:'#fff',
    bg:'#6f6464',
    bs:'1px 1px 4px 2px rgba(251, 251, 254, 0.2)',
    border:'1px solid #423f3f',
    cardBg:'##121111'
  }
  function changeThem(){
    console.log("Change")
    setIsLight(!isLight)
  }
  return (
    <ThemeProvider theme={isLight?lightTheme:darkTheme}>
    <Navbar setIsLight={changeThem} isLight={isLight}/>
    <div>{children}</div>
    </ThemeProvider>
  )
}
