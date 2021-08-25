import React from 'react'
import { ItemList } from '../../components/ItemList';
import { useEffect, useState, useContext} from "react";
import {useParams} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemListContainer = () => {
    
    const {items} = useContext(CartContext)
    const { categoryId } = useParams()
    const [productos, setProductos] = useState([]);
      
    
    useEffect(() => {
          if(categoryId && items){
            const itemsFound = items.docs.filter 
            (productos=>productos.data().categoria === categoryId)
            setProductos(itemsFound)
          }else if (items){
            setProductos(items.docs)
          }
    },[categoryId,items])
      
      
      
      
    return (
        <div>
          <ItemList product={productos}/>
        </div>
    )
}