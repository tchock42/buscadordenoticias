import {useContext} from 'react'        //importa el hook para usar el context
import NoticiasContext from '../context/NoticiasProvider'

const useNoticias = () => {
  return useContext(NoticiasContext)
}

export default useNoticias;
