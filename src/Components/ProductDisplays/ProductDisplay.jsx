import React from 'react'
import Product from '../../Pages/Product'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

function ProductDisplay(props) {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.imageback} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
           </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
            </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <FaStar style={{color : 'orange'}} />
                <FaStar  style={{color : 'orange'}}/>
                <FaStar  style={{color : 'orange'}}/>
                <FaStar  style={{color : 'orange'}}/>
                <FaStarHalfStroke  style={{color : 'orange'}}/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirts or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
          
        </div>
    </div>
  )
}

export default ProductDisplay