import "tailwindcss/tailwind.css";
import '@/styles/globals.css'
import React from 'react'
import {Provider} from 'react-redux';
import {store} from '@/redux-store/store';
import type {AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import RouterListener from '@/components/store/routerListener';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import LoadingLine from "@/components/loadingLine";

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
        <Provider store={store}>
          <RouterListener />
          <LoadingLine />
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
