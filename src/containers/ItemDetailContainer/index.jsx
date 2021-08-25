import React from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import { useEffect, useState, useContext } from "react";
import { useParams} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
  const {items} = useContext(CartContext)
    const { id } = useParams();
    const [productos, setProductos] = useState(null)
    console.log(items, productos)


    useEffect(()=>{
      if (items){
        const itemFound = items.docs.find (producto=>producto.data().id === id)
        setProductos(itemFound)
      }
      
      }
       
    ,[id, items])
      
    return (
        <div>
           {productos && <ItemDetail item={productos.data()}/>}
        </div>
    )
}