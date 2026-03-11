import { useNavigate } from "react-router-dom";

function SubmittedRegistration() {
  const navigate = useNavigate();

  const savedData = JSON.parse(localStorage.getItem("registrationData"));

  if (!savedData) {
    return (
      <div className="p-10 text-center">
        <h2>No registration found.</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
        >
          Go to Event Page
        </button>
      </div>
    );
  }

  const handleCancel = () => {
    localStorage.removeItem("registrationData");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        You Have Already Registered
      </h1>

      <div className="bg-white p-6 rounded shadow w-96">

        <p><strong>Name:</strong> {savedData.fullName}</p>
        <p><strong>Email:</strong> {savedData.email}</p>
        <p><strong>Phone:</strong> {savedData.phone}</p>
        <p><strong>Organization:</strong> {savedData.organization}</p>
        <p><strong>Ticket Type:</strong> {savedData.ticketType}</p>
        <p><strong>Dietary:</strong> {savedData.dietary}</p>
        <p><strong>Notes:</strong> {savedData.notes}</p>

        <div className="flex justify-between mt-6">

          <button
            onClick={() => navigate("/register")}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={handleCancel}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Cancel Registration
          </button>

        </div>

      </div>

    </div>
  );
}

export default SubmittedRegistration;