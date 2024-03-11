import Navbar from './compenents/Navbar'
import Container from './compenents/Container'
import Row from './compenents/Row'

import SiteRoutes from './SiteRoutes'
import { ThemeProvider } from 'styled-components'
import { useContext } from 'react'
import{lightTheme,darkTheme} from "./theme";
import { SiteContext } from './context/SiteContext'
import { GlobalStyle } from './compenents/styled'



function App() {
  const{themeName}=useContext(SiteContext)

  return (
    <>
  <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle/>
      <Navbar />
      <Container className="mt-4">
        <Row>
         <SiteRoutes/>
        </Row>
      </Container>
      </ThemeProvider>
    </>
  )
}

export default App
