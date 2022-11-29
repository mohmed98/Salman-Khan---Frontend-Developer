import {Navigate,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';
const RequireAuth = ({children}) => {
   const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
   const location = useLocation()
    if(!isAuth){
        return <Navigate to = '/' replace state = {{from:location}}/>
    }
    return children
};

export default RequireAuth;
