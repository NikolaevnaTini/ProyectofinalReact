import React, {useState} from 'react'
import './estilos.css';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';

export const Item = ({productData}) => {
    
    const [itemAgregado, setItemAgregado] = useState(null);

    const onAdd =(cantidad) => {
        setItemAgregado(cantidad)
       
    }

    // container-fluid d-flex m-auto flex-column
    return (
        <div className="container container-fluid mr-auto p-3">
            {/* Iniciamos el cuadro */}
            <div className="row"> 
                {/* Iniciar las columnas */}
                <div className="card">
                    <h1>{productData.nombre}</h1>
                    <img src={productData.imagen} className='img-fluid' alt="imagen"/>
                    <p>${productData.precio}</p>

                    <ItemCount producto={productData} onAdd={onAdd} />
                    <Link to={`/item/${productData.id}`} className="btn btn-outline-warning" >Ver más</Link>
                </div>
            </div>
        </div>
    )
}
