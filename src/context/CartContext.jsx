import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export const CartContextComponent = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()
    console.log(total)


    useEffect(() => {
        var t = 0
        // Con el map obtengo el total por producto
        const totals = cart.map( p => p.precio * p.cantidad)
        // Sumo a t el total por producto de cada uno
        totals.map( p => t = t + p)
        // Lo guardo en el estado
        setTotal(t)
        // Calculo la cantidad de productos
        const cartQuantity = cart.length
        // Las guardo en el estado
        setQuantity(cartQuantity)
    }, [cart])

    
    const addItem =(producto, cantidad) => {
        const index = cart.findIndex(item => item.id === producto.id) 
        if(index=== -1) setCart([...cart, {...producto, cantidad}])
        else {setCart(() => {
            cart[index].cantidad=cantidad
            return [...cart]
        })}
        }

    function clear(){
        setCart([])
    }

    function removeItem(id) {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
        
      }
      function subTotal(){
          
        const valor = cart.reduce((acumulador, item)=>{
            return (acumulador += (item.precio * item.cantidad))
          },0)
          return valor
        }

        function clearCart(){
            // Guardo como estado un array vacío
            setCart([])
            setQuantity(0)
        }

    return (
        <CartContext.Provider value={{cart, total, clearCart, quantity, addItem, clear, removeItem, subTotal}} >
            {children}
        </CartContext.Provider>
            )
}
