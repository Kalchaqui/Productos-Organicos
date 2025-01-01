import Header from "./components/Header"
import Productos from "./components/Productos"
import { useState, useEffect } from "react"
import { db } from "./data/db"
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Props|| sirve para que los componentes se comuniquen entre ellos
//Se pasan de padre a hijo, no al revez.

//El state en react es sincrono o asincrono? Es Asincrono
//porque otras funciones se pueden mandar a llamar aunque no se alla escrito a la primera vez 


// lod componentes deberan ser .tsx o .jsx, tiene 2 propositos: ser re-utilizable y separar la funcionalidad
// Los componentes siempre tiene que tener un return() que es lo que muestra en pantalla
function App() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db) //Si fuera una API es recomendable el useEffect
    //STATE Hooks se colocan en la parte superior, fuera de condicionales
    //const [auth, setAuth] = useState(false)
    //const [total, setTotal] = useState(0)
    const [cart, setCart] = useState(initialCart)
    const MAX_ITEMS = 100
    const MIN_ITEMS = 1

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

function addToCart(item){

    const itemExists =cart.findIndex(productos=>productos.id === item.id)
    if(itemExists >=0){//existe en el carrito
        if(cart[itemExists].quantity >= MAX_ITEMS)return
        const updateCart = [...cart]
        updateCart[itemExists].quantity++
        setCart(updateCart)
}else{
    item.quantity = 1
    setCart([...cart, item])
}

}
     
function removeFromCart(id){
    setCart(prevCart => prevCart.filter(productos => productos.id !== id))
}

function increaseQuantity(id){
    const updatedCart = cart.map(item => { 
        if(item.id === id && item.quantity < MAX_ITEMS){
            return{
                ...item,
                quantity: item.quantity + 1
            }
        }
        return item
    })  
    setCart(updatedCart)
}

function decreaseQuantity(id){
    const updatedCart = cart.map(item => { 
        if(item.id === id && item.quantity > MIN_ITEMS){
            return{
                ...item,
                quantity: item.quantity - 1
            }
        }
        return item
    })
    setCart(updatedCart)
}

    function clearCart(){
        setCart([])
    }

 

  return (
    
    <Router>
        
    

    <Header 
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    />

<Routes>
    
<Route path="/" element={
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((productos)=>( 
                <Productos 
                key={productos.id}
                productos={productos}
                setCart={setCart}
                cart={cart}
                addToCart = {addToCart}
                />
                
                
            ))}
            
           


        </div>
    </main>
 }
 />
                <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
                </Routes>
    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">Productor Orgánicos - Todos los derechos Reservados</p>
        </div>
    </footer>
    </Router>

    
  );
}

export default App
