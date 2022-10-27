import { useState } from 'react';
import './sizeButton.css';

const SizeButton = ({type, items, setItem}) =>{
    const [active, setActive] = useState(false);
    console.log(items);
    const onClick = (active, setActive, type, items, setItem) =>{
        active ? setActive(false) : setActive(true);
        active && setItem(items.filter((i) => i.size === type));
    }

    return(
        <>
        <button className="sizeItemsButton" onClick={() => onClick(active, setActive, type, items, setItem)}>{type}</button>
        </>
    )
}

export default SizeButton;