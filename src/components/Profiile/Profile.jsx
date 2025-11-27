import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
  username,
  location,
  tag,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["user-card"]}>
      <div>
        <img src={avatar} alt="User avatar" className={css["user-img-wrap"]} />
        <p className={css["user-name"]}>{username}</p>
        <p className={css["user-tag"]}>@{tag}</p>
        <p className={css["user-location"]}>{location}</p>
      </div>
      <ul className={css["user-stats"]}>
        <li>
          <span>Followers</span>
          <span className={css["user-stat"]}>{followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span className={css["user-stat"]}>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css["user-stat"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.array,
};
