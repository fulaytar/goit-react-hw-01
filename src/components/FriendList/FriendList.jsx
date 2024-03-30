import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {
            friends.map(element => {
                return (
                    <FriendListItem key={element.id} friends={element} />
                )
            })
            }    
        </ul>
    );
}