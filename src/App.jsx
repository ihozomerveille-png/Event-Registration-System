import { Routes, Route, Navigate } from "react-router-dom";
import EventInfo from "./pages/EventInfo";
import RegistrationForm from "./pages/RegistrationForm";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import SubmittedRegistration from "./pages/SubmittedRegistration";

function App() {

  const savedData = localStorage.getItem("registrationData");

  return (
    <Routes>

      <Route
        path="/"
        element={savedData ? <Navigate to="/submitted" /> : <EventInfo />}
      />

      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/review" element={<Review />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/submitted" element={<SubmittedRegistration />} />

    </Routes>
  );
}

export default App;