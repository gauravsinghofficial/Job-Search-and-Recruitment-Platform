import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MessageInbox.css";

const MessageInbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get("/api/messages");
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  return (
    <div className="message-inbox">
      <h2 className="message-inbox-title">Messages</h2>
      <ul className="message-list">
        {messages.length === 0 ? (
          <li className="message-item">No messages</li>
        ) : (
          messages.map((message, index) => (
            <li key={index} className="message-item">
              <strong className="message-sender">{message.sender}</strong>:{" "}
              {message.content}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MessageInbox;
