import { NavLink } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

const Item = function ({ id, title, description, price, image }) {
  return (
    <div class="col-md-3 text-center">
        <Card style={{ width: '18rem', marginBottom: '15px' }}>
            <NavLink to={`${id}`}>
                <Card.Img variant="top" style={{width:"100%",height: "40vh", objectFit: "cover" }} src={`${image}`} />
            </NavLink>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div class="col-md-12 text-center">
                <Card.Text>
                    <h5>$ {price} USD</h5>
                </Card.Text>
                </div>
                <div class="col-md-12 text-center">
                    <Button variant="primary">Agregar al carrito</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  );
};

export default Item;
