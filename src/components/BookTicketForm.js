// src/components/BookTicketForm.js

import React from 'react';

const BookTicketForm = ({ movieName, showTime }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Book Ticket</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Movie Name</label>
          <input
            type="text"
            value={movieName}
            readOnly
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Show Time</label>
          <input
            type="text"
            value={showTime}
            readOnly
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookTicketForm;
