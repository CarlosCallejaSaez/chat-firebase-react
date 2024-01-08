import React from "react";
import google from "../../assets/google.png";
import { auth } from "../../firebase-config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Carlos Dev Community Chat</h1>
      {user ? (
        <button onClick={signOut}  type="button">
          Sign Out
        </button>
      ) : (
        <button >
          <img
            onClick={googleSignIn}
            src={google}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default Navbar;