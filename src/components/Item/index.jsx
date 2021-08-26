import React, {useState} from 'react'
import './estilos.css';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';

export const Item = ({productData}) => {
    
    const [itemAgregado, setItemAgregado] = useState(null);

    const onAdd =(cantidad) => {
        setItemAgregado(cantidad)
       
    }

    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <img src={productData.imagen} alt="imagen"/>
            <p>${productData.precio}</p>
            <ItemCount producto={productData} onAdd={onAdd} />
            <Link to={`/item/${productData.id}`} className="btn btn-secondary" >Ver más</Link>
        </div>
    )
}
