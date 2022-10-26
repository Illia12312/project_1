import './Product.css';
import up from './img/icons/icon-up.svg';
import down from './img/icons/icon-down.svg';
import cross from './img/icons/cross.svg';
import kross from '../../../../img/sneaker.jpg';

const Product = () =>{
    return(
        <section className="product">
            <div className="productImgg"><img src={kross} alt="Apple watch"/></div>
            <div className="productTitle">Apple watch</div>
            <div className="productCountСart">
                <div className="countCart">
                    1 ШТ.
                </div>
            </div>
            <div className="productPrice">6000 грн.</div>
            <div className="productControls">
                <button type="button" className='buttonImg'>
                    <img src={cross} alt="Delete"/>
                </button>
            </div>
        </section>
    )
}

export default Product;