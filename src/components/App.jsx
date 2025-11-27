import "./App.css";
import userData from "../components/data/userData.json";
import friends from "../components/data/friends.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";

function App() {
  const { username, location, tag, avatar, stats } = userData;

  return (
    <>
      <Profile
        username={username}
        location={location}
        tag={tag}
        avatar={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
