import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="column">
      <h1> Auth0 Login App</h1>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </main>
  );
}

export default App;
