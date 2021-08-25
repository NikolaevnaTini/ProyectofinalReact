import React, {useState} from 'react'
import { ItemCount } from '../ItemCount';
import {Link} from 'react-router-dom';
export const ItemDetail = ({productos}) => {
   
const [itemAgregado, setItemAgregado] = useState(null);

const onAdd =(cantidad) => {
    setItemAgregado(cantidad)
   
}
    return (
        <div>
          <p>{productos.nombre}</p>
            <img src={productos.imagen} alt={productos.nombre}/>
            <p>{productos.precio}</p>
            <p>{productos.stock}</p>
            <p>{productos.descripcion}</p>
            {itemAgregado ? 
            <div><Link to='/cart'><button>Ir al Carrito</button></Link></div>
                : 
            <ItemCount onAdd={onAdd} producto={productos}/>}           
        </div>
    )
}




