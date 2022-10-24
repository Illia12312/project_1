import './LookingForItem.css';
import sneaker from "./../../img/sneaker.jpg";

const LookingForItem = ({name, price}) =>{
    return(
        <div className="LookingForItem">
            <div className='LookingForImgHolder'>
                <img src={sneaker} alt="" className="LookingForImg" />
            </div>
            <div className="infoHolderLL">
                <div className="name">{name}</div>
                <div className="price">{price} грн.</div>
            </div>
        </div>
    )
}

export default LookingForItem