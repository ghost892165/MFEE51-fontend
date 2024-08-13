import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DocSelector from "./DocSelector";
import PetSelector from "./PetSelector";
import Info from "./info/Info";
import AppointmentConfirmation from "./AppointmentConfirmation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <DocSelector />
            </Layout>
          }
        />
        <Route
          path="/info"
          element={
            <Layout>
              <Info />
            </Layout>
          }
        />
        <Route path="/pet-selector" element={<PetSelector />} />
        <Route
          path="/appointment-confirmation"
          element={<AppointmentConfirmation />}
        />
      </Routes>
    </Router>
  );
}

export default App;
