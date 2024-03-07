import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function BreadCrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <FaLongArrowAltRight /> SHOP <FaLongArrowAltRight /> {product.category} <FaLongArrowAltRight /> {product.name}
    </div>
  )
}

export default BreadCrum