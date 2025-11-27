import "./App.css";
import userData from "../components/data/userData.json";
import Profile from "./Profiile/Profile";

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
    </>
  );
}

export default App;
