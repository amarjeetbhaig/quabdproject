// src/components/ShowSummary.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowSummary = () => {
  const { id } = useParams();

  // Fetch show details from API based on id
  // Replace 'API_URL' with the actual URL of your API
  const showDetails = fetch(`https://api.tvmaze.com/search/shows?q=${id}`)
    .then(response => response.json())
    .then(data => data);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Show Summary</h1>
      <p>{showDetails.summary}</p>
      <Link to={`/book-ticket/${id}`}>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Book Ticket
        </button>
      </Link>
    </div>
  );
};

export default ShowSummary;
