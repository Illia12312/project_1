import './SizeItem.css';
import arrow from './../Item/arrow.png';
import { useState } from 'react';
import SizeButton from './sizeButton/sizeButton';

const SizeItem = () =>{
    const [open, setOpen] = useState(false)

    const openFunc = () =>{
        open ? setOpen(false) : setOpen(true);
    }

    return(
        <ul className="sizeItemHolder">
            <div className='filterNamingHolder' onClick={openFunc}>
                <div className='filterNaming'>РАЗМЕРЫ</div>
                <div className="filterNamingImgHolder">
                    <img src={arrow} alt="#" className={open ? 'filterNamingImg open' : 'filterNamingImg'}/>
                </div>
            </div>
            <div className={open ? 'sizeItemsButtonsHolder open' : 'sizeItemsButtonsHolder'}>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                    <SizeButton/>
                </div>
        </ul>
    )
}

export default SizeItem;