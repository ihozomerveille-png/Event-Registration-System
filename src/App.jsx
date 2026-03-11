import { Routes, Route } from "react-router-dom";
import EventInfo from "./pages/EventInfo";
import RegistrationForm from "./pages/RegistrationForm";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import SubmittedRegistration from "./pages/SubmittedRegistration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventInfo />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/review" element={<Review />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/submitted" element={<SubmittedRegistration />} />
    </Routes>
  );
}

export default App;