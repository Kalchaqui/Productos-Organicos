import { useMemo } from "react"

function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}){ //De esta forma ya lo hace un componente, abajo incluye el return()

    //State Derivado
const isEmpy = useMemo(() => cart.length === 0[cart]) //derivado
const cartTotal = useMemo( () => cart.reduce((total, item)=> total + (item.quantity * item.price), 0), [cart] )

//lo que esta aca es lo que se va a mostrar en pantalla
    return(
<header className="py-5 header"> 
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="/">
                        <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            
                            { isEmpy ? (
                                <p className="text-center">El carrito esta vacio</p>
                            ): (
<>
                            
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(productos => (

                                    
                                    <tr key={productos.id}>
                                        <td>
                                            <img className="img-fluid" src={`/img/${productos.image}.jpg`} alt="imagen productos" />
                                        </td>
                                        <td>{productos.name}</td>
                                        <td className="fw-bold">
                                                ${productos.price}
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=> decreaseQuantity(productos.id)}

                                            >
                                                -
                                            </button>
                                                {productos.quantity}
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=> increaseQuantity(productos.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={() => removeFromCart(productos.id)}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
    
                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            <button 
  className="btn btn-dark btn-success w-100 mt-3 p-2"
  onClick={() => window.location.href = "/checkout"}
>
  Pagar
</button>
                            <button 
                            className="btn btn-dark w-100 mt-3 p-2"
                            onClick = {clearCart}

                            >Vaciar Carrito
                                </button>
                            </>
                            
                        )}
                            </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>


    )

}
export default Header //con esto completo mi componente