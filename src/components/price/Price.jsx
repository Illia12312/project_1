import './Price.css';
import { useState } from 'react';
import arrow from './../Item/arrow.png';

const Price = () =>{
    const [open, setOpen] = useState(false)

    const openFunc = () =>{
        open ? setOpen(false) : setOpen(true);
    }
    return(
        <ul className="filterPriceHolder">
            <div className='filterNamingHolder' onClick={openFunc}>
                <div className='filterNaming'>ЦЕНА</div>
                <div className="filterNamingImgHolder">
                    <img src={arrow} alt="#" className={open ? 'filterNamingImg open' : 'filterNamingImg'}/>
                </div>
            </div>
            <ul className={open ? 'filterInputsHolder open' : 'filterInputsHolder'}>
                <div className='filterPriceFlex'>
                    <div className="filterInputHolder">
                        <label htmlFor="minPrice" className='inputLabel'>
                            <span>ОТ</span>
                            <input type="number" className="filterInput minPrice" id='maxPrice' value='2500'/>
                        </label>
                    </div>
                    <div className="filterInputLine"></div>
                    <div className="filterInputHolder">
                    <label htmlFor="minPrice" className='inputLabel'>
                            <span>ДО</span>
                            <input type="number" className="filterInput maxPrice" id='minPrice' value='10000'/>
                        </label>
                    </div>
                </div>
            </ul>
        </ul>
    )
}

export default Price;