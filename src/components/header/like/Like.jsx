import './Like.css';
import cancel from '../../../img/cancel.png';
import { useSelector } from 'react-redux';
import LikeMol from './components/LikeMol';

const Like = ({active, setActive}) =>{
    const like = useSelector((state) => state.cart.like)

    return(
        <div className={active ? 'like active' : 'like'}>
            <div className={active ? 'likeContent active' : 'likeContent'} onClick={e => e.stopPropagation()}>
                <div className='likeTitleHolder'>
                    <h3 className="likeTitle">ИЗБРАННОЕ</h3>
                    <snap><img src={cancel} onClick={() => setActive(false)} className='likeCancelButton' alt="#" /></snap>
                    <div className="likeInfo">
                        <div className="likeInfoHolder tovar"><span>ТОВАР</span></div>
                        <div className="likeInfoHolder"><span>ЦЕНА</span></div>
                    </div>
                    {like.length === 0 ? (<div className='likeEmpty'>НИЧЕГО НЕТ</div>) : like.map((i) => (
                        <LikeMol id={i.id} name={i.title} price={i.price} gender={i.gender} key={i.id} setActive={setActive}/>
                    ))}
                </div>
            </div>
        </div>
    )
} 

export default Like;