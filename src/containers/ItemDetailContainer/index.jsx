import React from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
import {firestore} from '../../firebase'

export const ItemDetailContainer = () => {

   
    const [productos, setProductos] = useState(null)
    const [estado, setEstado] = useState("pendiente");
    const { id } = useParams();

    useEffect(()=>{

      const db = firestore;
      const collection = db.collection("items")


      if (id){

        const filtro = collection.doc(id)
        const query = filtro.get()

        query.then((resultados)=>{

          const id = resultados.id
          const data = resultados.data()
          const data_final = {id,...data}
          setProductos(data_final);
        }).finally(() => {
          setEstado("terminado")
        });
      }else{
        setEstado("terminado");
      }
      
    },[id])

    if (estado === "pendiente") {

      return (
        <div className="container-fluid d-flex m-auto flex-column">
          <Spinner animation="border" role="status" className="mx-auto mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>)
    }
      
    return (
      <div className="container">
        <div className="container-fluid d-flex m-auto flex-column">
           {productos && <ItemDetail productos={productos}/>}
        </div>
      </div>
    )
}