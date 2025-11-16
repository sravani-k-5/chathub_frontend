// import './App.css';
// import ChatRoom from './ChatRoom.jsx';

// function App() {
// 	return (
// 		<div className="App">
// 			<ChatRoom />
// 		</div>
// 	);
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
import ChatRoom from "./ChatRoom"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
