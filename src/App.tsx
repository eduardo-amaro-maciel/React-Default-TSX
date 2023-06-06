import { GlobalStyle } from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import RoutesApp from "./routes/RoutesApp"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
    </ThemeProvider>
  )
}

export default App
