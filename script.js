let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    enter(e);
  });

  square.addEventListener("mouseout", () => {
    leave();
  });
});

function enter(e) {
  let hovered = e.target;
  console.log(hovered);

  squares.forEach((square) => {
    if (hovered.id !== square.id) {
      square.style.backgroundColor = "#6f4e37";
    } else {
      square.style.backgroundColor = "#E6E6FA";
    }
  });
}

function leave() {
  squares.forEach((square) => {
    square.style.backgroundColor = "#E6E6FA";
  });
}
