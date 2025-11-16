


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/chat");
//   };

//   const handleNavClick = (path) => {
//     if (path) navigate(path);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-brand" onClick={() => handleNavClick('/')}>
//           ChatHub
//         </div>
//         <div className="nav-links">
//           <button className="nav-btn" onClick={() => handleNavClick('/about')}>About</button>
//           <button className="nav-btn" onClick={() => handleNavClick('/contact')}>Contact</button>
//           <button className="nav-btn" onClick={() => handleNavClick('/features')}>Features</button>
//         </div>
//       </nav>

//       <div className="landing-container" onClick={handleClick}>
//         <h1 className="landing-title">
//           Welcome to <span className="brand">ChatHub</span>
//         </h1>
//         <p className="subtitle">
//           Click anywhere to start chatting 💬
//         </p>
//       </div>
//     </>
//   );
// };

// export default LandingPage;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [activePage, setActivePage] = useState('home');

//   const handleClick = () => {
//     navigate("/chat");
//   };

//   const handleNavClick = (path, pageName) => {
//     setActivePage(pageName);
//   };

//   // About Page Content
//   const AboutPage = () => (
//     <div className="modal-overlay" onClick={() => setActivePage('home')}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <h2>About ChatHub</h2>
//         <div className="modal-text">
//           <p>ChatHub is a modern, real-time messaging platform designed to connect people seamlessly across the globe.</p>
//           <p>Our mission is to provide a secure, fast, and user-friendly communication experience that brings people together.</p>
//           <p>Built with cutting-edge technology, ChatHub offers end-to-end encryption, real-time messaging, and a beautiful interface that makes conversations enjoyable.</p>
//         </div>
//         <button className="close-btn" onClick={() => setActivePage('home')}>Close</button>
//       </div>
//     </div>
//   );

//   // Contact Page Content
//   const ContactPage = () => (
//     <div className="modal-overlay" onClick={() => setActivePage('home')}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <h2>Contact Us</h2>
//         <div className="modal-text">
//           <p><strong>Email:</strong> support@chathub.com</p>
//           <p><strong>Phone:</strong> +1 (555) 123-4567</p>
//           <p><strong>Address:</strong> 123 Chat Street, Digital City, DC 10001</p>
//           <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
//           <p>For technical support, please contact our team. We're here to help you have the best ChatHub experience possible!</p>
//         </div>
//         <button className="close-btn" onClick={() => setActivePage('home')}>Close</button>
//       </div>
//     </div>
//   );

//   // Features Page Content
//   const FeaturesPage = () => (
//     <div className="modal-overlay" onClick={() => setActivePage('home')}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <h2>ChatHub Features</h2>
//         <div className="modal-text">
//           <div className="feature-item">
//             <h3>🔒 End-to-End Encryption</h3>
//             <p>Your conversations are protected with military-grade encryption.</p>
//           </div>
//           <div className="feature-item">
//             <h3>⚡ Real-Time Messaging</h3>
//             <p>Messages delivered instantly with typing indicators and read receipts.</p>
//           </div>
//           <div className="feature-item">
//             <h3>📱 Cross-Platform Sync</h3>
//             <p>Seamlessly switch between devices with synchronized message history.</p>
//           </div>
//           <div className="feature-item">
//             <h3>🎨 Custom Themes</h3>
//             <p>Personalize your chat experience with multiple theme options.</p>
//           </div>
//           <div className="feature-item">
//             <h3>📁 File Sharing</h3>
//             <p>Share documents, images, and videos up to 100MB per message.</p>
//           </div>
//           <div className="feature-item">
//             <h3>👥 Group Chats</h3>
//             <p>Create groups with up to 100 members for collaborative conversations.</p>
//           </div>
//         </div>
//         <button className="close-btn" onClick={() => setActivePage('home')}>Close</button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-brand" onClick={() => setActivePage('home')}>
//           ChatHub
//         </div>
//         <div className="nav-links">
//           <button className="nav-btn" onClick={() => handleNavClick('/about', 'about')}>About</button>
//           <button className="nav-btn" onClick={() => handleNavClick('/contact', 'contact')}>Contact</button>
//           <button className="nav-btn" onClick={() => handleNavClick('/features', 'features')}>Features</button>
//         </div>
//       </nav>

//       {activePage === 'home' && (
//         <div className="landing-container" onClick={handleClick}>
//           <h1 className="landing-title">
//             Welcome to <span className="brand">ChatHub</span>
//           </h1>
//           <p className="subtitle">
//             Click anywhere to start chatting 💬
//           </p>
//         </div>
//       )}

//       {activePage === 'about' && <AboutPage />}
//       {activePage === 'contact' && <ContactPage />}
//       {activePage === 'features' && <FeaturesPage />}
//     </>
//   );
// };

// export default LandingPage;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");

  // NEW STATE for Authentication popup
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => {
    // Instead of going to /chat directly -> show authentication popup
    setShowAuth(true);
  };

  const handleNavClick = (path, pageName) => {
    setActivePage(pageName);
  };

  // ---------- YOUR ABOUT, CONTACT & FEATURES PAGES (UNCHANGED) ----------
  const AboutPage = () => (
    <div className="modal-overlay" onClick={() => setActivePage("home")}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>About ChatHub</h2>
        <div className="modal-text">
          <p>ChatHub is a modern, real-time messaging platform...</p>
        </div>
        <button className="close-btn" onClick={() => setActivePage("home")}>
          Close
        </button>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="modal-overlay" onClick={() => setActivePage("home")}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <div className="modal-text">
          <p>Email: support@chathub.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Chat Street, Digital City, DC 10001</p>
          <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
        </div>
        <button className="close-btn" onClick={() => setActivePage("home")}>
          Close
        </button>
      </div>
    </div>
  );

  const FeaturesPage = () => (
    <div className="modal-overlay" onClick={() => setActivePage("home")}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>ChatHub Features</h2>
        <div className="modal-text"> 
          <div className="feature-item"> 
            <h3>🔒 End-to-End Encryption</h3> 
            <p>Your conversations are protected with military-grade encryption.</p> </div>
             <div className="feature-item"> 
              <h3>⚡ Real-Time Messaging</h3> 
              <p>Messages delivered instantly with typing indicators and read receipts.</p> </div> 
              <div className="feature-item"> 
                <h3>📱 Cross-Platform Sync</h3> 
                <p>Seamlessly switch between devices with synchronized message history.</p> </div> 
                <div className="feature-item"> 
                  <h3>🎨 Custom Themes</h3> 
                  <p>Personalize your chat experience with multiple theme options.</p> </div> 
                  <div className="feature-item"> 
                    <h3>📁 File Sharing</h3> 
                    <p>Share documents, images, and videos up to 100MB per message.</p> </div> 
                    <div className="feature-item"> 
                      <h3>👥 Group Chats</h3> 
                      <p>Create groups with up to 100 members for collaborative conversations.</p> </div> 
                      </div>
        <button className="close-btn" onClick={() => setActivePage("home")}>
          Close
        </button>
      </div>
    </div>
  );

  // ---------- AUTHENTICATION POPUP ----------
  const AuthPopup = () => (
    <div className="auth-overlay" onClick={() => setShowAuth(false)}>
      <div className="auth-card" onClick={(e) => e.stopPropagation()}>
        <div className="auth-tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <div className="auth-body">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button
              className="auth-submit"
              onClick={() => navigate("/chat")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="auth-body">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button
              className="auth-submit"
              onClick={() => navigate("/chat")}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* NAVBAR - NOT TOUCHING */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setActivePage("home")}>
          ChatHub
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => handleNavClick("/about", "about")}>
            About
          </button>
          <button className="nav-btn" onClick={() => handleNavClick("/contact", "contact")}>
            Contact
          </button>
          <button className="nav-btn" onClick={() => handleNavClick("/features", "features")}>
            Features
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {activePage === "home" && (
        <div className="landing-container" onClick={handleClick}>
          <h1 className="landing-title">
            Welcome to <span className="brand">ChatHub</span>
          </h1>
          <p className="subtitle">Click anywhere to start chatting 💬</p>
        </div>
      )}

      {/* MODALS */}
      {activePage === "about" && <AboutPage />}
      {activePage === "contact" && <ContactPage />}
      {activePage === "features" && <FeaturesPage />}

      {/* AUTH POPUP */}
      {showAuth && <AuthPopup />}
    </>
  );
};

export default LandingPage;
