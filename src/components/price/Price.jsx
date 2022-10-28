import './Price.css';
import { useState } from 'react';
import arrow from './../Item/arrow.png';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Price = ({item, setItem, gender}) =>{
    const [minValue, setMinValue] = useState(4);
    const [maxValue, setMaxValue] = useState(78001);
    const [open, setOpen] = useState(false);
    const characters = useSelector((state) => state.entity.characters);

    useEffect(() =>{
        setItem(characters.filter((i) => i.price > minValue && i.price < maxValue && i.gender === gender));
    }, [minValue, maxValue])

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
                            <input type="number" className="filterInput minPrice" id='minPrice' onChange={(e) => setMinValue(e.target.value)} value={minValue}/>
                        </label>
                    </div>
                    <div className="filterInputLine"></div>
                    <div className="filterInputHolder">
                    <label htmlFor="minPrice" className='inputLabel'>
                            <span>ДО</span>
                            <input type="number" className="filterInput maxPrice" id='maxPrice' onChange={(e) => setMaxValue(e.target.value)} value={maxValue}/>
                        </label>
                    </div>
                </div>
            </ul>
        </ul>
    )
}

export default Price;