import { useContext } from 'react'
import { productContext } from '../context/productsContext'

const useProducts = () => {
    return useContext(productContext);
}

export default useProducts
