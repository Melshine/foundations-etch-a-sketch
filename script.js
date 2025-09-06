const GRID_WITDH = 16;
const CELL_WIDTH = 30;
const grid = document.querySelector("#grid");

for (let i = 0; i < GRID_WITDH ** 2; i++) {
    const cell = document.createElement('div');
    cell.style.width = `${CELL_WIDTH}px`;
    cell.style.height = `${CELL_WIDTH}px`;
    grid.appendChild(cell);
}

grid.style.width = `${GRID_WITDH * CELL_WIDTH}px`;

grid.addEventListener('mouseover', event => {
    const cell = event.target;
    cell.classList.add('black');
})