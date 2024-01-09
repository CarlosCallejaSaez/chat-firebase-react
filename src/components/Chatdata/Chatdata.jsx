import React from "react";
import { auth } from "../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Chatdata.css"

const Chatdata = ({ chatmessage }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="chat-message-container">
      <img
        className="avatar"
        src={chatmessage.avatar}
        alt="avatar"
      />
      <div className="message-container">
        <p className="name">{chatmessage.name}</p>
        <p className="message-text">{chatmessage.text}</p>
      </div>
    </div>
  );
};

export default Chatdata;