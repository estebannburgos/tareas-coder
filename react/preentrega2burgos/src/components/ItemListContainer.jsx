import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const ItemListContainer = ({ data }) => {
    const {id} = useParams();
    let category = useLocation().pathname.split("/")[1] > 0 ?  id : useLocation().pathname.split("/")[1];
    let item = '';

    if (category > 0) {
        for (const property in data) {
            let items = data[property];
            for(const i of items) {
                if (i.id == category) {
                    item = i;
                    break;
                }
            }
        }
    }   
    else {
        const items = data[category];
        item = items.find((item) =>item.id === id);
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${item.image}`} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <div class="col-md-12 text-center">
                    <Card.Text>
                        <h5>$ {item.price} USD</h5>
                    </Card.Text>
                    </div>
                    <div class="col-md-12 text-center">
                        <Button variant="primary">Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemListContainer