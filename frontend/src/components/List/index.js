import './styles.css';

import ListItem from './ListItem';

const List = (props) => {
    return(
        <ul  className="ul">
            {props.list.map(item =>(
            <ListItem key={item.id.value} item={item} />
            )
            )}
        </ul>
    )
}

export default List;