let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", (e) => {
    enter(e);
  });

  square.addEventListener("mouseleave", () => {
    leave();
  });
});

function enter(e) {
  let hovered = e.target;
  console.log(hovered);

  squares.forEach((square) => {
    if (hovered.id !== square.id) {
      square.classList.add("active");
    } else {
      square.classList.remove("active");
    }
  });
}

function leave() {
  squares.forEach((square) => {
    square.classList.remove("active");
  });
}
