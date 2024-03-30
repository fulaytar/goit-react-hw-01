import css from './FriendListItem.module.css';

export default function FriendListItem(element) {
    return (
        <li className={css.listElement} key={element.id}>
        <div>
                <img  className={css.imageAvatar} src={element.friends.avatar} alt="Avatar" width="48" />
                <p className={css.friendsName}>{element.friends.name}</p>
                <p className={element.friends.isOnline?css.online:css.offline }>{element.friends.isOnline?'Online':'Offline'}</p>
        </div>
        </li>
    )
}