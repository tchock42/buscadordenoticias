import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"
import staticImage from '../assets/staticImagenews.jpg'

const Noticia = ({noticia}) => {

    const {urlToImage, url, author, title, content, description, source} = noticia

    // console.log(noticia)
    return (
        <Grid item md={6} lg={4}>
            <Card sx={{
                display:'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
                
                <CardMedia
                    component="img"                     //componente imagen
                    alt={`Imagen de la noticia ${title}`}
                    image={urlToImage ?? staticImage}                  //url de la imagen
                    height={'250'}                      //fija las imagenes del mismo tamaño

                />

               <CardContent>
                    <Typography 
                        variant="body1" 
                        color="error"
                    >{source.name}</Typography>

                    <Typography 
                        variant="h5" 
                        color="div"
                    >{title}</Typography>
                    
                    <Typography 
                        variant="body2"
                    >{description}</Typography>
               </CardContent>

               <CardActions>
                    <Link                                   //En CardActions van las accciones del Card
                        href={url}
                        target="_blank"                     //abre en nueva pestaña
                        variant="button"
                        width={'100%'}                      //toma todo el ancho del contenido
                        textAlign={'center'}
                        sx={{textDecoration: 'none'}}
                    >Leer Noticia</Link>
               </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticia
