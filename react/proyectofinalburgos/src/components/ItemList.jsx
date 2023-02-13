import Item from './Item';
import styles from "../styles/itemList.module.css";

const ItemList = ({ items }) => {
    return (
        <div className={styles.ItemListDiv}>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default ItemList;