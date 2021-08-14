const board = document.querySelector("#board");
const number = 500;
for (let i = 0; i < number; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  board.append(square);

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
}

function setColor(element) {
  element.style.backgroundColor = reng();
element.style.boxShadow=`0 0 10px ${reng()}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow=`0 0 2px black`

}

function reng() {
  let reng = "#";
  let symbols = "1234567890abcdef";
  for (let i = 0; i < 6; i++) {
    reng += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return reng;
}
