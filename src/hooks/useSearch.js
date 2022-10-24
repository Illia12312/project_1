import { useSelector } from "react-redux";
import {
    charactersSelector,
  } from "../redux-store/entity/selectors";


export function useLookinFor(value){
    const items = useSelector(charactersSelector);
    let finalArr = [];
    if(value !== ''){
        let counter = 0;
        for(let i=0; i<items.length; i++){
            if(counter===5){
                break
            }
            items[i].brand.includes(value) ? finalArr.push([items[i].brand, items[i].price]) && counter++ : counter+=0;
        }
    }
    let response = finalArr.splice(0,5);
    return {response}
}  