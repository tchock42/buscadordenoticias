import axios from 'axios';
import {useState, useEffect, createContext} from 'react'

const NoticiasContext = createContext();    //se inicializa el Context

const NoticiasProvider = ({children}) => {  //Se pasa el children como parámetro

  const [categoria, setCategoria] = useState('general')       //por default tiene categoría 'general'. categoria seleccionada por el usuario
  const [noticias, setNoticias] = useState([]);               //array de noticias
  const [pagina, setPagina] = useState(1)                     //inicializa en pagina 1
  const [totalNoticias, setTotalNoticias] = useState(0)       //inicializa total de noticias en 0

  useEffect(() => {                         //useEffect de categoria
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

      const {data} = await axios(url)       //realiza la consulta
      // console.log(data)
      setNoticias(data.articles)            //carga las noticias en el state de noticias
      setTotalNoticias(data.totalResults)   //carga el total de noticias para calcular la paginación
      setPagina(1)
    }
    consultarAPI();                         //ejecuta funcion de ConsultarAPI

  }, [categoria]);                          //cuando hay cambio en categoria, carga las noticias de la aPI
  
  useEffect(() => {                         //useEffect de pagina
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

      const {data} = await axios(url)       //realiza la consulta
      // console.log(data)
      setNoticias(data.articles)            //carga las noticias en el state de noticias
      setTotalNoticias(data.totalResults)   //carga el total de noticias para calcular la paginación
    }
    consultarAPI();                         //ejecuta funcion de ConsultarAPI

  }, [pagina]);                          //cuando hay cambio en categoria, carga las noticias de la aPI
  
  const handleChangeCategoria = e => {      //cambio en el select de noticias
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e, valor) => {  //considera el valor de pagina actual
    setPagina(valor)
  }


  return (                                  //return con los componentes
    <NoticiasContext.Provider               //Componente Provider con los values extraídos del mismo
        value={{
          categoria,
          handleChangeCategoria,
          noticias,
          totalNoticias,
          handleChangePagina,
          pagina
        }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}
export {                                    //se exporta el Provider
    NoticiasProvider
}

export default NoticiasContext;             //se exporta el Context
