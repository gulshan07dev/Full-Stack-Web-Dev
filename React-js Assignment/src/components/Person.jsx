import React from "react";

export default function Person({ name, age }) {
  return (
    <div>
      <p>
        The Person, name: {name}, age: {age}
      </p>
    </div>
  );
}
