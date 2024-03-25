import { Box, Container, Grid, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box component="footer" bgcolor="primary.main" color="primary.contrastText" py={2} marginTop={5}>
      <Container>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item lg={4} md={6} xs={12}> 
            <Typography align="center" variant="h6">Jacob Gómez Carrillo</Typography>
          </Grid>
          <Grid item >
            <Typography align="center">Todos los Derechos Reservados {new Date().getFullYear()}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
