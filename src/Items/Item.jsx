import React from 'react'

function Item(props) {
  return (
    <div className="item">
    <img src={props.image} alt="" />
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