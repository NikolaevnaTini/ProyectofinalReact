import React from 'react'
import { ItemList } from '../../components/ItemList';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import {firestore} from '../../firebase'
import Spinner from 'react-bootstrap/Spinner'
import './estilos.css'

export const ItemListContainer = () => {
    
    const { id } = useParams()
    const [estado, setEstado] = useState("pendiente");
    const [productos, setProductos] = useState([]);
     
    
    
    useEffect(() => {
           

  /* REFERENCIA A BASE DE DATOS */
        const db = firestore
      
        const collection = db.collection("items")

        if (id) {


          const filtro = collection.where("categoria", "==", id)
          const query = filtro.get()

        query.then((resultados)=>{

          const resultados_parseado = []

          resultados.forEach((documento)=>{
            const id = documento.id
            const data = documento.data()
            const data_final = {id,...data}
            
            resultados_parseado.push(data_final)

          })

          setProductos(resultados_parseado)
        }).finally(()=>{
          setEstado("terminado")
        })
      } else {
        const query = collection.get();
        query.then((resultados)=>{
          const resultados_parseado = []

          resultados.forEach((documento) => {
            const id = documento.id
          const data = documento.data()
          const data_final = { id, ...data }
          resultados_parseado.push(data_final)

        })
        setProductos(resultados_parseado)
      }).finally(()=>{
        setEstado("terminado")
      });
    }


  }, [id])
  
  if (estado === "pendiente") {
      
    return (
      <div className="container-fluid d-flex m-auto flex-column">
      <Spinner animation="border" role="status" className="mx-auto mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    )
  }
  return(
      <div className="container">
         <div className="container-fluid d-flex m-auto flex-column">
         <div class="lines"></div>
            <h1 className="catalogo"><span>Nuestro Catalogo</span> </h1>
           
          <ItemList product={productos}/>
        </div>
        </div>
        
    )
  }
