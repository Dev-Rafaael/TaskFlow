import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";



export function privateRoute({children}:{ children:JSX.Element}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isAuthenticate = useAuthStore((state)=>state.isAuthenticate)

if(!isAuthenticate){
    return <Navigate to={'/login'}/>
}

return children
}