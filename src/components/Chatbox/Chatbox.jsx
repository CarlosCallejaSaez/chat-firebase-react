import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Form from "../Form/Form";
import Chatdata from "../Chatdata/Chatdata";
import "./Chatbox.css"

const Chatbox = ({ topic }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    
    const q = query(
      collection(db, "messages"),
      where("topic", "==", topic), 
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe;
  }, [topic]); 

  return (
    <main className="chat-box">
      <div className="topic-container">
       <h2>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
       </div>
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Chatdata key={message.id} chatmessage={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <Form scroll={scroll} topic={topic} />
    </main>
  );
};

export default Chatbox;
