import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/sunflower1.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  
    return (
        <div className={styles.nav}>
            <Link to={'/'}>
                <img src={logo} alt="Logo" className={styles.logoNavbar} />
            </Link>

            <ul className={styles.ulNavbar}>
                <li className={styles.liNavbar}><Link to={'/aceites'}>Aceites</Link></li>
                 <li className={styles.liNavbar}><Link to={'/fideos'}>Fideos</Link></li>
            </ul>
            
            <Link to={'/cart'} className={styles.liNavbar} id="cart-widget">
                <CartWidget />
            </Link>
        </div>
    )
};

export default NavBar;