import React from "react";
import { auth } from "../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const Chatdata = ({ chatmessage }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <img
        className="avatar"
        src={chatmessage.avatar}
        alt="avatar"
      />
      <div className="message">
        <p className="name">{chatmessage.name}</p>
        <p className="message">{chatmessage.text}</p>
      </div>
    </div>
  );
};

export default Chatdata;