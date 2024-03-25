import { Grid, Typography } from "@mui/material"
import Pagination from "@mui/material/Pagination";      //import para el paginador
import Stack from "@mui/material/Stack";                //import para el paginador
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia";

const ListadoNoticias = () => {

    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias();
    const totalPaginas = Math.ceil(totalNoticias / 20);
    const noticiasFiltradas = noticias.filter(noticia => noticia.title!=="[Removed]")
    // console.log(totalPaginas)
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Últimas Noticias
            </Typography>

            <Grid 
                container
               spacing={2}                     //agrega espaciado a loscomponentes del grid
            >
                {noticiasFiltradas.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>

            <Stack 
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{marginTop: 4}}
            >
                <Pagination 
                    count={totalPaginas}                    //total de páginas
                    color="primary"                         //color de tema
                    onChange={handleChangePagina}           //funcion para cambiar pagina
                    page={pagina}                           //state interno del paginador asociado al state pagina
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias
