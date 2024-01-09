import React from "react";
import google from "../../assets/google.png";
import { auth } from "../../firebase-config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    auth.signOut();
  };

 
  return (
    <nav className="nav-bar">
      <h1>Carlos Dev Community Chat</h1>
      <div className="buttons-and-links">
        {user ? (
          <button onClick={logOut} type="button" className="logout">
            Log Out
          </button>
        ) : (
          <button>
            <img
              onClick={googleSignIn}
              src={google}
              alt="sign in with google"
              type="button"
            />
          </button>
        )}

        
        <a
          href="https://github.com/CarlosCallejaSaez"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub />
        </a>

      
        <a
          href="https://www.linkedin.com/in/carlos-calleja-saez/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;