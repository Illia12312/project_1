import adidas from './../../../img/iconAdidas.png';
import converse from './../../../img/iconConverse.png';
import jordan from './../../../img/iconJordan.jpg';
import nb from './../../../img/iconNB.svg';
import nike from './../../../img/iconNike.jpg';
import puma from './../../../img/iconPuma.png';
import './Brand.css';

const Brand = () =>{
    return(
    <div className='brandHolder'>
        <div className="brand">
            <img src={adidas} className='adidas brandImg' />
        </div>
        <div className="brand"><img src={converse} className='converse brandImg' /></div>
        <div className="brand"><img src={jordan} className='jordan brandImg' /></div>
        <div className="brand"><img src={nb} className='nb brandImg'/></div>
        <div className="brand nikeHolder"><img src={nike} className='nike brandImg' /></div>
        <div className="brand"><img src={puma} className='puma brandImg' /></div>
    </div>
    )
}

export default Brand;