import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // registration with email
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update the user display name and photoURL

  const modifyProfile = (user) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  //  Login with email
  const emailLogin = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Login with gmail
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //  Login with github

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  };

  // logout from account
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user management with firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser == null || currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerWithEmail,
    emailLogin,
    gmailLogin,
    githubLogin,
    loading,
    modifyProfile,
    logout,
    user,
    setUser,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
