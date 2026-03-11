import { useNavigate } from "react-router-dom";

function Review() {
  const navigate = useNavigate();

  const savedData = JSON.parse(localStorage.getItem("registrationData"));

  if (!savedData) {
    return <p>No registration data found.</p>;
  }

  const handleConfirm = () => {
    navigate("/confirmation");
  };

  const handleEdit = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">Review Your Registration</h1>

      <div className="bg-white p-6 rounded shadow w-96">

        <p><strong>Full Name:</strong> {savedData.fullName}</p>
        <p><strong>Email:</strong> {savedData.email}</p>
        <p><strong>Phone:</strong> {savedData.phone}</p>
        <p><strong>Organization:</strong> {savedData.organization}</p>
        <p><strong>Ticket Type:</strong> {savedData.ticketType}</p>
        <p><strong>Dietary Requirements:</strong> {savedData.dietary}</p>
        <p><strong>Notes:</strong> {savedData.notes}</p>

        <div className="flex justify-between mt-6">

          <button
            onClick={handleEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirm Registration
          </button>

        </div>

      </div>

    </div>
  );
}

export default Review;