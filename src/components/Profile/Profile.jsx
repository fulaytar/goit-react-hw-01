import css from './Profile.module.css';

export default function Profile(props) {
  return (
    <div className={css.container}>
      <div className={css.container_profile}>
        <img
          className={css.user_image}
          src={props.image}
          alt="User avatar"
          width={100}
        />
        <p className={css.username}>{props.name}</p>
        <p className={css.username_tag}>@{props.tag}</p>
        <p className={css.username_location}>{props.location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.list_item}>
          <span className={css.stats}>Followers</span>
          <span className={css.stats_count}>{props.stats.followers}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.stats}>Views</span>
          <span className={css.stats_count}>{props.stats.views}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.stats}>Likes</span>
          <span className={css.stats_count}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
