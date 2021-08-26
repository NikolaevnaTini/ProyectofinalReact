import React from 'react'
import { Item } from "../Item";

export const ItemList = ({product}) => {

    return (
        <div>
        {product.map((element) =>
        <Item key={element.id} productData ={element}/>
        )}
        </div>
    )
}


