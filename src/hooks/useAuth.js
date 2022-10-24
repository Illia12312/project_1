import { useSelector } from "react-redux";
import {
    charactersSelector,
  } from "../redux-store/entity/selectors";

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

export function useLookinFor(value){
    const items = useSelector(charactersSelector);
    let finalArr = [];
    if(value !== ''){
        let counter = 0;
        for(let i=0; i<items.length; i++){
            if(counter===3){
                break
            }
            items[i].brand.includes(value) ? finalArr.push([items[i].brand, items[i].price]) && counter++ : counter+=0;
        }
    }
    let response = finalArr.splice(0,4);
    return {response}
}   