import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (<Login onLoginSuccess={() => setIsLoggedIn(true)} />) : (  <Dashboard /> )}
    </>
  );
}
