const GRID_WIDTH_PX = 600;
const SIZE = 16;

function destroyGrid() {
    const grid = document.querySelector("#grid");
    const newGrid = document.createElement('div');
    newGrid.id = 'grid';
    document.body.removeChild(grid);
    document.body.appendChild(newGrid);
}

function createGrid(size = SIZE) {

    function hoverEffect(event) {
        const cell = event.target;
        cell.classList.add('black');
    }

    const grid = document.querySelector("#grid");
    for (let i = 0; i < size ** 2; i++) {
        const CELL_WIDTH = Math.floor(GRID_WIDTH_PX / size);
        const cell = document.createElement('div');
        cell.style.width = `${CELL_WIDTH}px`;
        cell.style.height = `${CELL_WIDTH}px`;
        cell.addEventListener('mouseenter', hoverEffect);
        grid.appendChild(cell);
    }

    grid.style.width = `${GRID_WIDTH_PX}px`;

}

createGrid();

const button = document.querySelector('button');
button.addEventListener('click', event => {
    const size = +prompt('Give a number');
    if (size > 0 && size <= 100) {
        destroyGrid();
        createGrid(size);
    }
})