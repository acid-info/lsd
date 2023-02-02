import '@/styles/globals.css'
import { dark, light } from '@/theme'
import { Button, ThemeProvider } from '@acid-info/lsd-react'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Button
        onClick={() => {
          setIsDark((v) => !v)
        }}
      >
        switch
      </Button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
