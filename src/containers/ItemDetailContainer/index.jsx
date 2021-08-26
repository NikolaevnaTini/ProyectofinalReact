import React from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import { getProductsJSON } from '../../utils/utils';
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [productos, setProductos] = useState(null)

    useEffect(()=>{
      const waitForData = async () =>{
        let data = await getProductsJSON();
        const item = data.find(item=>item.id === id)
        
        console.log(item)
        setProductos(item)
      }
      setTimeout(()=>{
        waitForData()
      },2000) 
    },[id])
      
    return (
        <div>
           {productos && <ItemDetail productos={productos}/>}
        </div>
    )
}