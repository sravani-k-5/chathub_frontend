// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const ChatRoom = () => {
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [user, setUser] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const newSocket = io("http://localhost:5000", {
//       reconnectionDelayMax: 10000,
//       reconnectionAttempts: 5,
//       timeout: 10000
//     });

//     // Handle socket connection events
//     newSocket.on('connect', () => {
//       console.log('Connected to server');
//       setError(null);
//     });

//     newSocket.on('connect_error', (error) => {
//       console.error('Socket connection error:', error);
//       setError('Failed to connect to chat server. Retrying...');
//     });

//     newSocket.on('disconnect', (reason) => {
//       console.log('Disconnected:', reason);
//       setError('Disconnected from server. Attempting to reconnect...');
//     });

//     setSocket(newSocket);

//     // Fetch initial messages
//     const fetchMessages = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch("http://localhost:5000/messages");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (!Array.isArray(data)) {
//           throw new Error('Expected an array of messages from server');
//         }
//         setMessages(data);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//         setError("Failed to load messages");
//         setMessages([]); // Ensure messages is always an array
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchMessages();

//     // Cleanup on unmount
//     return () => {
//       newSocket.close();
//     };
//   }, []);

//   useEffect(() => {
//     if (!socket) return;

//     // Listen for new messages
//     socket.on("message", (newMessage) => {
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     });

//     // Cleanup listeners
//     return () => {
//       socket.off("message");
//     };
//   }, [socket]);

//   const sendMessage = () => {
//     if (socket && user && message) {
//       socket.emit("sendMessage", { user, message });
//       setMessage(""); // Clear input
//     }
//   };

//   return (
//     <div>
//       <h2>Chat Hub</h2>
//       {error && (
//         <div style={{ color: 'red', margin: '10px 0' }}>
//           {error}
//         </div>
//       )}
//       {isLoading ? (
//         <div>Loading messages...</div>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {Array.isArray(messages) && messages.map((msg) => (
//             <li key={msg._id || `${msg.user}-${Date.now()}`} style={{ margin: '10px 0' }}>
//               <strong>{msg.user}:</strong> {msg.message}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div style={{ marginTop: '20px' }}>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <button 
//           onClick={sendMessage}
//           disabled={!socket || !user || !message}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;






import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const ChatRoom = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newSocket = io("https://chathub-backend-nc2e.onrender.com", {
      reconnectionDelayMax: 10000,
      reconnectionAttempts: 5,
      timeout: 10000,
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      console.log("Connected to server");
      setError(null);
    });

    newSocket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      setError("Failed to connect to chat server. Retrying...");
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
      setError("Disconnected from server. Attempting to reconnect...");
    });

    setSocket(newSocket);

    const fetchMessages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://chathub-backend-nc2e.onrender.com/api/messages"
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Expected an array of messages");
        setMessages(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError("Failed to load messages");
        setMessages([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket && user && message) {
      socket.emit("sendMessage", { user, message });
      setMessage("");
    }
  };

//   return (
//     <div>
//       <h2>Chat Hub</h2>
//       {error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}
//       {isLoading ? (
//         <div>Loading messages...</div>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {messages.map((msg, index) => (
//             <li key={msg._id || index} style={{ margin: "10px 0" }}>
//               <strong>{msg.user}:</strong> {msg.message}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div style={{ marginTop: "20px" }}>
//         <input type="text" placeholder="Your name" value={user} onChange={(e) => setUser(e.target.value)} style={{ marginRight: "10px" }}/>
//         <input type="text" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ marginRight: "10px" }}/>
//         <button onClick={sendMessage} disabled={!socket || !user || !message}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };
return (
  <div className="ai-card">
    <h2>ChatHub AI</h2>

    {isLoading ? (
      <div>Loading messages...</div>
    ) : (
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-bubble">
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
    )}

    <div className="input-area">
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
);
};
export default ChatRoom;
