import React from 'react';
import './Item.css';
import Checkbox from './../checkbox/Checkbox';
import { useState } from 'react';
import arrow from './arrow.png';



const Item = ({name, items, setItem}) =>{
    const [open, setOpen] = useState(false)

    const openFunc = () =>{
        open ? setOpen(false) : setOpen(true);
    }

    return(
        <ul className="filterHolder">
            <div className='filterNamingHolder' onClick={openFunc}>
                <div className='filterNaming'>{name}</div>
                <div className="filterNamingImgHolder">
                    <img src={arrow} alt="#" className={open ? 'filterNamingImg open' : 'filterNamingImg'}/>
                </div>
            </div>
            <ul className={open ? 'filterItemsHolder open' : 'filterItemsHolder'}>
                <li className="filterItem">
                    <Checkbox name='Nike'  brand='nike' key='fdfd' items={items} setItem={setItem}/>
                </li>
                <li className="filterItem">
                    <Checkbox name='Jordan' key='fdfddvdv'/>
                </li>
                <li className="filterItem">
                    <Checkbox name='New Balance' key='fdfddvv'/>
                </li>
                <li className="filterItem">
                    <Checkbox name='Puma' key='fdfddvvd'/>
                </li>
                <li className="filterItem">
                    <Checkbox name='Converse' key='fdfddvdvd'/>
                </li>
            </ul>
        </ul>
    )
}

export default Item;