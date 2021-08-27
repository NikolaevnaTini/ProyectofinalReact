import React, {useState} from 'react'
import { ItemCount } from '../ItemCount';
import {Link} from 'react-router-dom';
export const ItemDetail = ({productos}) => {
   
const [itemAgregado, setItemAgregado] = useState(null);

const onAdd =(cantidad) => {
    setItemAgregado(cantidad)
   
}
    return (
        <div className="container">
            <div className="container-fluid d-flex m-auto flex-column">
          <p>Camiseta : {productos.nombre}</p>
            <img src={productos.imagen} alt={productos.nombre}/>
            <p>Precio: ${productos.precio}</p>
            <p>Stock: {productos.stock} unidades</p>
            <p>Descripcion: {productos.descripcion}</p>
            {itemAgregado ? 
            <div><Link to='/cart'><button>Ir al Carrito</button></Link></div>
                : 
            <ItemCount onAdd={onAdd} producto={productos}/>}           
            </div>
        </div> 
    )
}




