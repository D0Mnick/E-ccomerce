import React, { useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { RxDropdownMenu } from "react-icons/rx";
import Item from '../Items/Item';


function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div class='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div class='shopcategory-indexSort'>
         <p>
          <span>Showing 1-12</span> out of 36 products
         </p>
         <div className="shopcategory-sort">
          Sort by <RxDropdownMenu />
         </div>
      </div>

       <div className="shopcategory-products">
       {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              imageback={item.imageback}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }
         })}
       </div>
       <div className="shopcategory-loadmore">
          Explore More
       </div>
    </div>
  )
}

export default ShopCategory