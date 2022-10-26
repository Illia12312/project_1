import "./brands.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "components/product/Product";

const Brands = () =>{
    const {brands} = useParams();
    const items = useSelector((state) => state.entity.characters);

    return(
        <div className="brands">
            <div className="brandsTitle">{brands}</div>
            {items.map((i) => 
                i.brand == brands && <Product gender={i.gender} price={i.price} name={brands}/>
            )}
        </div>
    )
}

export default Brands;