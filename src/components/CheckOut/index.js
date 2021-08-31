import { useState, useContext } from 'react'
import firebase from "firebase/app";
import { firestore } from '../../firebase'
import { CartContext } from '../../context/CartContext';


    const CheckOut = () =>{

        const { cart, total } = useContext(CartContext)

        const [ name, setName ] = useState("")
        const [ phone, setPhone ] = useState("")
        const [ email, setEmail ] = useState("")
    
        function submitOrder(){
    
            
            const db = firestore
            const orders = db.collection('orders')
    
            const order = {
                buyer: { name: name, phone: phone, email: email},
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
            }
            orders.add(order)
            .then(({ id }) => alert("Anotá el id de tu compra " + id))
            .catch((error) => console.log(error))
        }
    



return(



<form noValidate autoComplete="off">
<input id="standard-basic" placeholder="Name" value={name} 
onChange={(e) => setName(e.target.value)} />
<input id="standard-basic"  placeholder="Telephone" value={phone} 
onChange={(e) => setPhone(e.target.value)} />
<input id="standard-basic"  placeholder="Email" value={email} 
onChange={(e) => setEmail(e.target.value)} />
<button onClick={submitOrder}>
       Terminar Compra
  </button>
</form>




)

    }

    export default CheckOut


