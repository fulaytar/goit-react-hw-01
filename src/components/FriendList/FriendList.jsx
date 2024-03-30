import css from './FriendList.module.css';

export default function FriendList(props) {
    return (
        <ul className={css.list}>
            {
                props.friends.map(element => {
                    return (
                <li className={css.listElement} key={element.id}>
                <div>
                <img  className={css.imageAvatar} src={element.avatar} alt="Avatar" width="48" />
                <p className={css.friendsName}>{element.name}</p>
                <p className={element.isOnline?css.online:css.offline }>{element.isOnline?'Online':'Offline'}</p>
                </div>
                </li>
                )
            })
            }    
        </ul>
    );
};