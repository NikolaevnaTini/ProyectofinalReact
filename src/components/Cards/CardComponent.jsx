import { Link } from "react-router-dom";



const CardComponent = ({id,name,description,price,image}) => {


    
    return (
        <div className="col p-5">
        <div className="card container ">
            <img src={image} className="card-img-top" alt="..."/>         <div className="card-title">{name}</div>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
           
            <Link to={"/description/" + id} className="btn btn-primary">Ver detalles</Link>
            
        </div>
        </div>
        
    )
}

export default CardComponent