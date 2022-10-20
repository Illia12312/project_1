import './Product.css';
import up from './img/icons/icon-up.svg';
import down from './img/icons/icon-down.svg';
import cross from './img/icons/cross.svg';
import comp from './img/products/apple-watch.jpg';

const Product = () =>{
    return(
        <section className="product">
            <div className="productImg"><img src={comp} alt="Apple watch"/></div>
            <div className="productTitle">Apple watch</div>
            <div className="productCount">
                <div className="count">
                    <div className="countBox">
                        <input type="number" className="countInput" min="1" max="100" value="1"/>
                    </div>
                    <div className="countControls">
                        <button type="button" className="countUp buttonImg">
                            <img src={up} alt="Increase"/>
                        </button>
                        <button type="button" className="countDown buttonImg">
                            <img src={down} alt="Decrease"/>
                        </button>
                    </div>
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