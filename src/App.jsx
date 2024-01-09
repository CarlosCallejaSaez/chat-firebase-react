import React, { useState } from "react";
import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Chatbox from "./components/Chatbox/Chatbox";
import Home from "./components/Home/Home";
import topics from "./topics";

function App() {
  const [user] = useAuthState(auth);
  const [selectedTopic, setSelectedTopic] = useState("React");

  

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Home />
      ) : (
        <div >
          <div className="select-container" >
          <label htmlFor="selectTopic">Select Topic:  </label>
          <select value={selectedTopic} onChange={handleTopicChange} id="selectTopic">
            {topics.map((topic) => (
              <option key={topic} value={topic.toLowerCase()}>
                {topic}
              </option>
            ))}
          </select>
          </div>
          <Chatbox topic={selectedTopic} />
        </div>
      )}
    </div>
  );
}

export default App;
