import './Product.css';
import cross from './img/icons/cross.svg';
import kross from '../../../../img/sneaker.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartAction, setCartAction } from 'redux-store/cart/actions';
import { useState } from 'react';

const Product = ({name, count, price, id, email}) =>{
    const dispatch = useDispatch();
    const deleteFunc = (id) =>{
        dispatch(removeCartAction(id));
    }

    return(
        <section className="product">
            <div className="productImgg"><img src={kross} alt="Apple watch"/></div>
            <div className="productTitle">{name}</div>
            <div className="productCountСart">
                <div className="countCart">
                    {count} ШТ.
                </div>
            </div>
            <div className="productPrice">{price} грн.</div>
            <div className="productControls">
                <button type="button" className='buttonImg' onClick={() => deleteFunc(id)}>
                    <img src={cross} alt="Delete"/>
                </button>
            </div>
        </section>
    )
}

export default Product;