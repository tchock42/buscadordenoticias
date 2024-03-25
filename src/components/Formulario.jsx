import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material'
import { CATEGORIES } from '../data'
import useNoticias from '../hooks/useNoticias'

const Formulario = () => {

    const {categoria, handleChangeCategoria} = useNoticias()

    return (
        <form>
            <FormControl fullWidth>                           
                <InputLabel>Categorías</InputLabel>
                <Select                             
                    label="Categoría"
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIES.map( categoria => (
                        <MenuItem 
                            key={categoria.value} 
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
                {/* <Box sx={{marginTop:2}} >
                    <Button
                        fullWidth                   //agrega width de 100%
                        variant='contained'
                        color='primary'
                    >Buscar Noticias</Button>
                </Box> */}
            </FormControl>
        </form>

    )
}

export default Formulario
