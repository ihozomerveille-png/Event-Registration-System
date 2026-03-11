import { useNavigate } from "react-router-dom";

function EventInfo() {
  const navigate = useNavigate();

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Tech Innovation Conference 2026
      </h1>

      <p className="mb-2">Date: June 15, 2026</p>
      <p className="mb-2">Location: Kigali Convention Center</p>

      <p className="mb-6">
        Join developers, designers, and entrepreneurs for a day of innovation
        and networking.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Register Now
      </button>
    </div>
  );
}

export default EventInfo;