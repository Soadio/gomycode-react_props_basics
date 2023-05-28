import "./App.css";
import Profile from "./Component/Profile/Profile";
import profilePhoto from "./profile-photo.png";

function App() {
  return (
    <main>
      <Profile
        fullName="Sheriff Adio"
        address="Ikeja-Lagos, Nigeria"
        profession="Fullstack Developer"
        bio="programmer | Califonia"
      >
        {profilePhoto}
      </Profile>
    </main>
  );
}

export default App;
