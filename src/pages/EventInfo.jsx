import { useNavigate } from "react-router-dom";

function EventInfo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-4">
        Tech Innovation Conference 2026
      </h1>

      <p className="mb-2">📅 Date: June 20, 2026</p>
      <p className="mb-2">📍 Location: Kigali Convention Center</p>

      <p className="mb-6 text-center max-w-xl">
        Join developers, designers, entrepreneurs, and tech enthusiasts for a day
        of innovation, networking, and learning about the future of technology.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Register Now
      </button>

    </div>
  );
}

export default EventInfo;