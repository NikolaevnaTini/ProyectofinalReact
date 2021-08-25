import React, {useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext';

export const ItemCount = ({producto,onAdd}) => {
    
    const [initial, setContador]= useState(1)

    const {addItem}= useContext(CartContext)

    const sumar=() => {
        if(initial<producto.stock){
            setContador(initial+1)
        }
    }
    const onSubstract=() =>{
        if(initial>1)
        setContador(initial-1)
    }

    return (
        <div>
            <button onClick={onSubstract}>-</button>
            <input type="text" value={initial}/>
            <button onClick={sumar}>+</button>
            <button onClick={()=> {
                addItem(producto,initial)
                onAdd(initial)}}
                >Agregar al Carrito</button>
        </div>
    )
}


