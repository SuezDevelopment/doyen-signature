import '@/styles/globals.css'
import React from 'react'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import dynamic from "next/dynamic";
// import Alert from '@/components/alert';
import {ThemeProvider as NextThemesProvider} from 'next-themes';


export default function App({ Component, pageProps }: AppProps) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
       colors: {
        
       },
    },
  }); 
 
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {

      },
    },
  }); 

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{  
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        {/* <Alert /> */}
        <Component {...pageProps} />
      </NextUIProvider> 
    </NextThemesProvider>
  )
}
