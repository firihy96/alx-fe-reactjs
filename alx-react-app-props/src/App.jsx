import ProfilePage from "./ProfilePage";
import { UserContext } from './components/UserContext.js';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
