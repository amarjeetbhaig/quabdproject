import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    const [show, setShow] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
          const data = response.data;
          setShow(data); 
        } catch (error) {
          console.error('Error fetching show data:', error);
        }
      };
  
      fetchData();
    }, [id]);
  
    return (
      <div className="container mx-auto my-8">
        {show && ( 
          <div className="max-w-xl bg-white p-6 rounded-md shadow-md">
            <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
            <img
              src={show.image?.original}
              alt={show.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-600 mb-2">{show.summary}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Language: {show.language}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Premiered: {show.premiered}</span>
              <span className="text-sm">Runtime: {show.runtime} mins</span>
            </div>
           
          </div>
        )}
      </div>
    );
  };
  
  export default ShowDetails;
  