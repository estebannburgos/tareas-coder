import React, { useState } from 'react';
import styled from 'styled-components';
import styles from "../styles/itemCount.module.css";


const Input = styled.input`
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    text-align: center;
    width: 40px;
    background-color: #fff;
    border-radius: 1.5rem;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
`

const ItemCount = ({stock, initial, onAdd, id}) => {

    const [iValue, setiValue] = useState(initial);

    const updateCountInput = (e) => {
        const { value } = e.target;
        if (value <= stock) {
          setiValue(isNaN(value) ? 0 : parseInt(value));
        }
    };

    function clickHandler(event){
        if( event === "-" && iValue > 0){
            return () => setiValue(iValue - 1)
        }else if( event === "+" && iValue < stock){
            return () => setiValue(iValue + 1)
        }
    }

    return (
        <>
            <div className={styles.counterDiv}>
                <div className={styles.button} onClick={clickHandler("-")} role="button">-</div>
                    <Input type="number" value={iValue} onChange={(e) => updateCountInput(e)} id={`count${id}`} />
                <div className={styles.button} onClick={clickHandler("+")} role="button">+</div> 
            </div>
            <div className={styles.button} onClick={() => {onAdd(iValue)}} role="button" style={{width: 'auto', height: 'auto'}}>Agregar al carrito</div>
        </>
    )
}

export default ItemCount;