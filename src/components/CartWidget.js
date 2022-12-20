import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
    <div className="qty-display">5</div>
  </div>
  )
}

export default CartWidget