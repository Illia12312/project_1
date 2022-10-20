import './footer.css';
import geo from '../../img/geo.png';
import instagram from '../../img/instagram.png';
import facebook from '../../img/facebook.png';
import youtube from '../../img/youtube.png';
import twitter from '../../img/twitter.png';
import Brand from './brands/Brand';

const Footer = () =>{
    return(
        <div className="footerWrap">
            <Brand/>
            <div className='footer'>
                <div className='footerItem'>
                    <div className='footerItemInfoMain'>ILIA OUTLET</div>
                    <div className='footerItemInfo footerAdres'>О нас</div>
                    <div className='footerImgHolder'>
                        <img src={geo} className= 'footerLocation footerImg'/>
                        <span className='footerImgText'>st. Tornado, 6</span>
                    </div>
                </div>
                <div className='footerItem'>
                    <div className='footerItemInfoMain'>Помощь</div>
                    <div className='footerItemInfo'>Доставка</div>
                    <div className='footerItemInfo'>Оплтата</div>
                    <div className='footerItemInfo'>Возврат</div>
                </div>
                <div className='footerItem footerItemIcons'>
                    <img src={instagram} alt="instagram" className="footerImg" />
                    <img src={facebook} alt="facebook" className="footerImg" />
                    <img src={youtube} alt="youtube" className="footerImg" />
                    <img src={twitter} alt="twitter" className="footerImg" />
                </div>
            </div>
        </div>
    )
}

export default Footer;