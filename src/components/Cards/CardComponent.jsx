import { Link } from "react-router-dom";



const CardComponent = ({categoryId,nombre,descripcion,precio,imagen}) => {


    
    return (

        <div className="container">
            <div className="container-fluid d-flex m-auto flex-column">
                
                <img src={imagen} className="card card-img-top" alt="..."/>         
                <div className="card-title">{nombre}</div>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">{precio}</p>
                
                <Link to={"/description/" + categoryId} className="btn btn-primary">Ver detalles</Link>
            </div>
        </div>
        
    )
}

export default CardComponent