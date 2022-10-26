import '../Like.css';
import sneaker from '../../../../img/sneaker.jpg'
import { removeLikeAction } from 'redux-store/cart/actions';
import { useDispatch } from 'react-redux';

const LikeMol = ({name, price, id, gender}) => {
    const dispatch = useDispatch();
    const deleteFunc = (id) =>{
        dispatch(removeLikeAction(id));
    }
    return(
    <div className='likeMol'>
        <div className="likeHolder">
            <div className="likeImgHolder">
                <img src={sneaker} className="likeImg"></img>
                <div className='likeName'>{name}</div>
            </div>
            <div className='likePrice'>{price} грн.</div>
            <div className='likeDeleteHOlder'>
                <button className="likeDeleteButton" onClick={() => deleteFunc(id)}>УДАЛИТЬ</button>
            </div>
        </div>
    </div>
    )
}

export default LikeMol;