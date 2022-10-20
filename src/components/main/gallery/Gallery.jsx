import './Gallery.css'
import galleryFirst from './../../../img/galleryThirdjpg.jpg';
import galleryCenter from './../../../img/galleryMIddle.jpg';


const Gallery = () =>{
    return(
        <div className='gallery'>
            <div className='galleryHolder galleryHolderNB' id='galleryHolder'>
                <img src={galleryFirst} className='galleryHolderImg'></img>
                <div className='galleryHolderTitle'>PATTA x NEW BALANCE 991</div>
            </div>
            <div className='galleryHolder'>
                <img src={galleryCenter} className='galleryHolderImg middleImg' id='galleryHolder'></img>
                <div className='galleryHolderTitle'>NIKE SNEAKERS</div>
            </div>
        </div>
    )
}

export default Gallery 