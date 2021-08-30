import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CheckOut from '../CheckOut';

export const CartComponent = () => {
    
    const {cart, clear, removeItem, subTotal} = useContext(CartContext);
 
    return (
        
        cart.length ? 
        
            <div>
                
                {cart.map(producto=>{
                return (
                    <div className="container">
                <div className="container-fluid d-flex m-auto flex-column" key={producto.id}>
                    <h2>Productos agregados al carrito:</h2>
                    <h3>Camiseta: {producto.nombre}</h3>
                    <p>Precio por camiseta: ${producto.precio}</p>
                    <p>Cantidad de camisetas seleccionadas: {producto.cantidad}</p>
                    <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                    
                    <img src={producto.imagen} alt="productoNombre"/>
                    <button onClick={()=>removeItem(producto.id)}>X</button>
                </div>
                </div>
              

            )
        })}
       <CheckOut/>
            <div className="container">Total de compra: ${subTotal()}</div>
            <div className="container">
                <button onClick={clear}>Vaciar Carrito</button></div>
            </div>
            :
            <div className="container"><Link to="/">Seguir comprando </Link></div>
            
    )
    }