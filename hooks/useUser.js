import { useContext } from 'react'
import { userContext } from '../context/userContext'

const useUsers = () => {
    return useContext(userContext);
}

export default useUsers
