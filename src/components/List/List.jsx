import ListItem from "../ListItem/ListItem";

const List = ({ items }) => {
  return (
    <ul>
      {items && items.map((item) => <ListItem key={item}>{item}</ListItem>)}
    </ul>
  );
};

export default List;
