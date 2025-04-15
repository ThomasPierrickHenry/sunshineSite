import { ReactElement, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle, { dark, light, Normalize, ThemeProvider } from 'theme'
import  Router  from './router/Router'


function Render():ReactElement {
  const [theme] = useState<"light"|"dark">("light")
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>

  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Normalize />
    <Render />
  </StrictMode>,
)
