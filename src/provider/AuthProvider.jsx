import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
    });
    return () => {
      unsuscribe();
    };
  });
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
