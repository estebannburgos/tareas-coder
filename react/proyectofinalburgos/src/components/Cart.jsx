import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import stylesCartEmpty from "../styles/cartEmpty.module.css";
import stylesCartContainer from "../styles/cartContainer.module.css";


const Cart = () => {
    const { cartItems, totalPrice, removeItem } = useContext(CartContext);

    if(cartItems.length === 0) {
        return (
            <div className={stylesCartEmpty.cartContainerNoItems}>
                <h2 className={stylesCartEmpty.tituloCarrito}>No hay items en el carrito</h2>
                <Link to="/" className={stylesCartEmpty.boton}>Ver Catálogo</Link>
            </div>
        )
    }

    return (
        <>
            <div className={stylesCartContainer.CartContainer}>
                <h2 className={stylesCartContainer.tituloCarrito}>Carrito</h2>
                <br/>
                <ul className={stylesCartContainer.listaItems}>
                    {cartItems.map((item, key) => {
                        return (
                            <div className={stylesCartContainer.list} key={key}>
                                <img src={item.picture} alt={item.title} className={stylesCartContainer.articleImg} />
                                <li><Link to={`/item/${item.id}`}>{item.title}</Link></li>
                                <li>x{item.quantity}</li>
                                <li>Subtotal: {item.price * item.quantity}</li>
                                <button className={stylesCartContainer.cross} onClick={() => removeItem(item.id)}>&times;</button>
                            </div>
                        )
                    })}
                </ul>
                <h3>{`Su total es de: $${totalPrice()}`}</h3>
                <br/>
                <Link to='/form' className={stylesCartContainer.boton}>Terminar compra</Link>
            </div>
        </>
    )
}

export default Cart;