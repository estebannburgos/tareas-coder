import Item from "./Item";

const List = function ({ list }) {
  return list.map(({ id, title, description, price, image }) => (
    <Item key={id} id={id} title={title} description={description} price={price} image={image} />
  ));
};

export default List;
