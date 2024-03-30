import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList(props) {
    return (
        <ul className={css.list}>
            {
            props.friends.map(element => {
                return (
                    <FriendListItem key={element.id} friends={element} />
                )
            })
            }    
        </ul>
    );
}