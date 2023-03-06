function checkCapitalornot() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  firstName[0] === firstName[0].toUpperCase() &&
  lastName[0] === lastName[0].toUpperCase()
    ? alert("your name is capitalize")
    : alert("your name is not capitalize");
};