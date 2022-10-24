import './Gallery.css'
import galleryFirst from './../../../img/galleryThirdjpg.jpg';
import galleryCenter from './../../../img/galleryMIddle.jpg';
import { useState } from 'react';
import ProductPopup from 'components/ProductPopup/ProductPopup';


const Gallery = () =>{
    const [activeNike, setAktiveNike] = useState(false);
    const [activeNB, setAktiveNB] = useState(false);

    return(
        <div className='gallery'>
            <div className='galleryHolder galleryHolderNB' id='galleryHolder' onClick={() =>setAktiveNike(true)}>
                <img src={galleryFirst} className='galleryHolderImg'></img>
                <div className='galleryHolderTitle'>PATTA x NEW BALANCE 991</div>
                <ProductPopup  name="PATTA x NEW BALANCE 991" gender="for men" price="5600 грн." active={activeNike} setActive={setAktiveNike}/>
            </div>
            <div className='galleryHolder' onClick={() => setAktiveNB(true)}>
                <img src={galleryCenter} className='galleryHolderImg middleImg' id='galleryHolder'></img>
                <div className='galleryHolderTitle'>NIKE AIR FORCE 1</div>
                <ProductPopup  name="NIKE AIR FORCE" gender="for women" price="4900 грн." active={activeNB} setActive={setAktiveNB}/>
            </div>
        </div>
    )
}

export default Gallery 