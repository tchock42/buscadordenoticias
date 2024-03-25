import { Container, Typography, Grid } from "@mui/material"
import Formulario from "./components/Formulario"
import { NoticiasProvider } from "./context/NoticiasProvider"
import ListadoNoticias from "./components/ListadoNoticias"
import Footer from "./components/Footer"

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>

        <Grid 
          container 
          direction="row" 
          justifyContent="center" 
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario/>
          </Grid>
        </Grid>

        <ListadoNoticias/>
      </Container>

      <Footer/>

    </NoticiasProvider>
  )
}

export default App
