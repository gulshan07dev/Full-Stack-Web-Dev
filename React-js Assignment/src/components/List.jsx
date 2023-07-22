import React from "react";

export default function List({ items }) {
  return (
    <ul>
      {items.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}
