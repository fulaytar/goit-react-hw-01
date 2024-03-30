import css from './FriendListItem.module.css';

export default function FriendListItem({friends}) {
    return (
        <li className={css.listElement} key={friends.id}>
        <div>
                <img  className={css.imageAvatar} src={friends.avatar} alt="Avatar" width="48" />
                <p className={css.friendsName}>{friends.name}</p>
                <p className={friends.isOnline?css.online:css.offline }>{friends.isOnline?'Online':'Offline'}</p>
        </div>
        </li>
    )
}