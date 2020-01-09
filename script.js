const container = document.getElementById("container");
//create etch-a-sketch board
function createGrid(dim) {
  container.style.setProperty("--grid-row", dim);
  container.style.setProperty("--grid-cols", dim);
  for (let i = 0; i < dim * dim; i++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }
  drawOnGrid();
}
// resets board
function resetGrid() {
  container.textContent = "";
  let gridDim = Number(prompt("Enter a Number for Grid Rows and Columns", ""));

  createGrid(gridDim);
}
//fill in grid cells when mouse hovers over them
function drawOnGrid() {
  const cell = document.querySelectorAll("#container > div");

  cell.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style["background-color"] = "black";
    });
  });
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

createGrid(16);
