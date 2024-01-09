import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Carlos Dev Community Chat!</h1>
      <p>
        This is a community-driven chat application where developers can come
        together, discuss various topics, share knowledge, and connect with
        each other.
      </p>
      <p>
        To get started, choose a topic from the navigation bar and join the
        conversation. Whether you're a seasoned developer or just getting
        started, everyone is welcome!
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Real-time chat with other developers.</li>
        <li>Topic-based channels for focused discussions.</li>
        <li>Easy sign-in using Google authentication.</li>
        <li>Profile links to GitHub and LinkedIn for networking.</li>
        <li>Responsive design for a seamless experience on all devices.</li>
      </ul>
      <p>
        Join our community today and become a part of the Carlos Dev Chat
        family!
      </p>
    </div>
  );
};

export default Home;