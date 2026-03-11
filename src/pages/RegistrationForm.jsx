import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "Standard",
    dietary: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("registrationData", JSON.stringify(formData));

    navigate("/review");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-4">Event Registration</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <select
          name="ticketType"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        >
          <option>Standard</option>
          <option>VIP</option>
          <option>Student</option>
        </select>

        <input
          type="text"
          name="dietary"
          placeholder="Dietary Requirements"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Review Registration
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;