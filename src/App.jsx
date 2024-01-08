import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Chatbox from "./components/Chatbox/Chatbox";
import Home from "./components/Home/Home";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Home /> : <Chatbox />}
    </div>
  );
}
export default App;