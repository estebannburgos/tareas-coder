import { Link } from 'react-router-dom';
import styles from "../styles/item.module.css";

const Item = ({ item }) => {

    return (
        <>
            <div className={styles.item}>
                <img src={item.picture} alt={item.title} className={styles.articleImage} />
                <p className={styles.articleP}>{item.title}</p>

                <Link to={`item/${item.id}`} style={{textDecoration : 'none'}}>
                    <div className={styles.button}>Ver descripción</div>
                </Link>

            </div>
        </>
    )
}

export default Item;