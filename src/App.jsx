import Header from "./components/Header"
import Productos from "./components/Productos"
import { useState } from "react"
import { db } from "./data/db"
//Props|| sirve para que los componentes se comuniquen entre ellos
//Se pasan de padre a hijo, no al revez.



// lod componentes deberan ser .tsx o .jsx, tiene 2 propositos: ser re-utilizable y separar la funcionalidad
// Los componentes siempre tiene que tener un return() que es lo que muestra en pantalla
function App() {

    const [data, setData] = useState(db) //Si fuera una API es recomendable el useEffect
    //STATE Hooks se colocan en la parte superior, fuera de condicionales
    //const [auth, setAuth] = useState(false)
    //const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

function addToCart(iten){
    setCart(prevCart => [...prevcart, iten])

}
     

  return (
    <>
        
    <Header />
    
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


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">Productor Orgánicos - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
