import React from 'react'
import { ItemList } from '../../components/ItemList';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import {firestore} from '../../firebase'

export const ItemListContainer = () => {
    
    const { id } = useParams()
    console.log(id)
    const [productos, setProductos] = useState([]);
     
    
    
    useEffect(() => {
           

  /* REFERENCIA A BASE DE DATOS */
        const db = firestore
      
        const collection = db.collection("items")

        const query = collection.get()

      

        query.then((resultados)=>{

          const resultado_parseado = []

          resultados.forEach((documento)=>{
            const id = documento.id
            const data = documento.data()
            const data_final = {id,...data}
            console.log(data_final)
            resultado_parseado.push(data_final)

           

          })

          setProductos(resultado_parseado)
        })


  }, [id])
      
    return (
       
          <div>
          <ItemList product={productos}/>
        </div>
        
    )
}