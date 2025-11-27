import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className={css["friends-container"]}>
      {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
