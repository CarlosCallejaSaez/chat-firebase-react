import React, { useState } from "react";
import { auth, db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = ({ scroll, topic}) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("No valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      topic:topic,
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Write your message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input"
        placeholder="write your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;