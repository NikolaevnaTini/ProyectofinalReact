import React, { useContext } from 'react';
import './estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../context/CartContext';

export const CartWidget = () => {

    const {cart} = useContext(CartContext)
    let cantidadesCarrito= cart.reduce((acumulador, item)=>{
        return (acumulador += (item.cantidad))
      },0)
    return(
        <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={ faShoppingCart } className="iconoCarrito"/>
            <span className={cart.length? "badge bg-secondary" : "d-none"}>{cantidadesCarrito}</span>
        </button>
        
    )
}