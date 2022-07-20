import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TestPage from "./routes/TestPage";
import LoginPage from "./routes/LoginPage";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
