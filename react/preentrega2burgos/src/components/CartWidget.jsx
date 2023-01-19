import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Button variant="outline-primary" style={{ marginRight: '25px' }}><BsFillCartFill />0</Button>
  )
}

export default CartWidget