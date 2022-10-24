import { useSelector } from "react-redux";

export function useAuth(){
    const email = useSelector((state) => state.entity.email);
    const token= useSelector((state) => state.entity.token);
    const id = useSelector((state) => state.entity.id);

    return{
        isAuth: !!email,
        email, 
        token,
        id,
    }
}
