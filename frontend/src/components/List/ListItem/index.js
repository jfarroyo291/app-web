import { useState } from 'react';
import './styles.css';

const ListItem = function(props){
    const [likes, setLikes] = useState(0);
        return (
            <li onClick = {(e)=> {
                /* props.handleChild(props.item) */
            }}>
                <div className="list-item">
                    <div className="list-item-logo">
                        <img alt="avatar" src={props.item.picture.thumbnail} />
                    </div>
                    <div className = "list-item-body">
                        <p className = "name">
                            {`${props.item.name.title} ${props.item.name.first} ${props.item.name.last}`}
                        </p>
                        <p className = "time">{props.item.address}</p>
                        <p className = "prhone">{props.item.phone}</p>
                        <p className = "email">{props.item.email}</p>
                        <p><button className="btn" onClick={() => {setLikes(likes + 1)}}>
                        + {likes}
                        </button></p>
                    </div>
                </div>
            </li>
            )
};

export default ListItem;