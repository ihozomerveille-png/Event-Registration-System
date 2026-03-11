function Confirmation() {

  const savedData = JSON.parse(localStorage.getItem("registrationData"));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">

      <h1 className="text-4xl font-bold mb-4">
        Registration Successful!
      </h1>

      <p className="text-lg mb-4">
        Thank you for registering for the Tech Innovation Conference.
      </p>

      <p>
        Your ticket type: <strong>{savedData?.ticketType}</strong>
      </p>

    </div>
  );
}

export default Confirmation;