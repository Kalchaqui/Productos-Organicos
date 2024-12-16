import Header from "./components/Header"
import Productos from "./components/Productos"
import { useState } from "react"


// lod componentes deberan ser .tsx o .jsx, tiene 2 propositos: ser re-utilizable y separar la funcionalidad
// Los componentes siempre tiene que tener un return() que es lo que muestra en pantalla
function App() {

    //STATE
    const [auth, setAuth] = useState(false)
     

  return (
    <>
      
    <Header />
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            
            <Productos />

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
