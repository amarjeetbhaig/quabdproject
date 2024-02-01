// src/components/ShowList.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShowDetails from "../components/ShowDetails";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = response.data;
        setShows(data);
        console.log(data); // log the entire data array
      } catch (error) {
        console.error("Error fetching show data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Movie Listings</h1>
      <ul>
        {shows.map((show, index) => (
          <div
            key={index}
            className="max-w-xl bg-white p-6 rounded-md shadow-md"
          >
            <img
              src={show.show.image?.original}
              alt={show.show.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-bold mb-2">{show.show.name}</h2>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Language: {show.show.language}</span>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={show.show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Official Site
              </a>
              <Link
                to={`/detail/${show.show.id}`}
                className="text-blue-500 hover:underline"
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
