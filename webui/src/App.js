import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Profile from "./Pages/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authToken ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs"
          element={authToken ? <Jobs /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authToken ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route
          path="/register"
          element={<Register setAuthToken={setAuthToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
