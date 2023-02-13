import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [fetchedItem, setFetchedItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const itemDoesNotExist = {
        picture: "https://png.pngtree.com/png-clipart/20190903/original/pngtree-yellow-cartoon-forbidden-icon-design-png-image_4427930.jpg",
        title: "El producto no existe",
        stock: 0,
        price: 0,
    };

    let param = useParams();

    useEffect(() => {
        setIsLoading(true);

        const db = getFirestore();

        const docRef = doc(db, "items", param.id);

        getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() === undefined){
                    setFetchedItem(itemDoesNotExist);
                }else {
                    setFetchedItem({id: snapshot.id, ...snapshot.data()});
                }
            })
            .catch((err) => console.log('Error', err))
            .finally(() => setIsLoading(false));

    }, [param.id])
    
    return (
        isLoading ? <Loading/> : <ItemDetail item={fetchedItem} fetched={{fetchedItem: fetchedItem, setFetchedItem: setFetchedItem}} />
    )
}

export default ItemDetailContainer;