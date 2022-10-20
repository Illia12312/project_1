import './Like.css';
import cancel from '../../../img/cancel.png';
import sneaker from './../../../img/sneaker.jpg'

const Like = ({active, setActive}) =>{
    return(
        <div className={active ? 'like active' : 'like'}>
            <div className={active ? 'likeContent active' : 'likeContent'} onClick={e => e.stopPropagation()}>
                <div className='likeTitleHolder'>
                    <h3 className="likeTitle">ИЗБРАННОЕ</h3>
                    <snap><img src={cancel} onClick={() => setActive(false)} className='likeCancelButton' alt="#" /></snap>
                </div>
                <div className="likeInfo">
                    <div className="likeInfoHolder tovar"><span>ТОВАР</span></div>
                    <div className="likeInfoHolder"><span>ЦЕНА</span></div>
                </div>
                <div className="likeHolder">
                    <div className="likeImgHolder">
                        <img src={sneaker} className="likeImg"></img>
                        <div className='likeName'>Air Jordan 5 Retro</div>
                    </div>
                    <div className='likePrice'>6000 грн.</div>
                    <div className='likeDeleteHOlder'>
                        <button className="likeDeleteButton">УДАЛИТЬ</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Like;