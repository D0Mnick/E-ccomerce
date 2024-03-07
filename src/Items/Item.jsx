import React from 'react'
import {Link} from "react-router-dom"

function Item(props) {
  return (
    <div className="item">
  <Link to={`/product/${props.id}`}><img src={props.image} alt=""/></Link> 
    <p>{props.name}</p>
    <div className="item-prices">
      <div className="item-price-new">
         P{props.new_price}
      </div>
      <div className="item-price-old">
         P{props.old_price}
      </div>
    </div>
  </div>
  )
}

export default Item
