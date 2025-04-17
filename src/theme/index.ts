
import baseStyled, {
    createGlobalStyle,
    keyframes,
    css,
    ThemedStyledInterface,
    FlattenSimpleInterpolation,
    useTheme,
    DefaultTheme,
    ThemeProvider,
  } from 'styled-components'
  import { Normalize } from 'styled-normalize'
  import Default from './default'
  import { light, dark } from './theme'
  const GlobalStyle = createGlobalStyle`${Default}`
  
  export default GlobalStyle
  
  
  export { keyframes, css, ThemeProvider, Normalize }
  export { dark, light, useTheme }
  export type Theme = typeof light
  export type { DefaultTheme, FlattenSimpleInterpolation }
  export const styled = baseStyled as ThemedStyledInterface<Theme>
   