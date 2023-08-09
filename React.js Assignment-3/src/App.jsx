import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos";
import PhotoDetails from "./pages/PhotoDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Photos/>} />
        <Route path="/photos/:id" element={<PhotoDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
