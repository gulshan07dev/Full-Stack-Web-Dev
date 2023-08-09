import React from "react";

export default function PhotoCard({ photo }) {
  return (
    <div className="photo">
      <img src={photo.url} alt={`${photo.title} Image`} />
    </div>
  );
}
