import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DocSelector from "./DocSelector";
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
      <Layout>
        <Routes>
          <Route path="/" element={<DocSelector />} />
          <Route
            path="/appointment-confirmation/:appointmentId"
            element={<AppointmentConfirmation />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
