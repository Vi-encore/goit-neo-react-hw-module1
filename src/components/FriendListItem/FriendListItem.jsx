import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  const statusClsx = clsx(
    css["friend-status"],
    isOnline ? css.statusGreen : css.statusRed
  );

  return (
    <li className={css["friend-container"]}>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css["friend-name"]}>{name}</p>
        <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
