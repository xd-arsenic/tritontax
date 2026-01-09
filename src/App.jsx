import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VolunteerResources from "./VolunteerResources";
import SignUpPage from "./SignUpPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer-resources" element={<VolunteerResources />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
