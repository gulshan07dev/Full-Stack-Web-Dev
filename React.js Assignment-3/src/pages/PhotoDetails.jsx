import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotoDetails() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const url = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

  useEffect(() => {
    async function fetchPhotoDetails() {
      try {
        const response = await axios.get(url);
        setPhoto(response.data.photo);
      } catch (error) {
        console.error("Error fetching photo details:", error);
      }
    }
    fetchPhotoDetails();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-details">
      <img src={photo.url} alt={`${photo.title} Image`} />
      <div>
        <h2>{photo.title}</h2>
        <p>{photo.description}</p>
      </div>
    </div>
  );
}
