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
                    <SizeButton type="4.5" key="1"/>
                    <SizeButton type="5" key="2"/>
                    <SizeButton type="5.5" key="3"/>
                    <SizeButton type="6" key="4"/>
                    <SizeButton type="7" key="5"/>
                    <SizeButton type="8" key="6"/>
                    <SizeButton type="8.5" key="7"/>
                    <SizeButton type="9.5" key="8"/>
                    <SizeButton type="10.5" key="9"/>
                    <SizeButton type="11" key="10"/>
                    <SizeButton type="12" key="11"/>
                </div>
        </ul>
    )
}

export default SizeItem;