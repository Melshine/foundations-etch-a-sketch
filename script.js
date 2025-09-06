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

    function hoverEffect() {
        if (this.style.backgroundColor === '') {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${r},${g},${b})`;
            this.style.opacity = .1;
        } else {
            this.style.opacity = Math.min(1, +this.style.opacity + .1);
        }
    }

    
    const grid = document.querySelector("#grid");
    grid.style.width = `${GRID_WIDTH_PX}px`;
    for (let i = 0; i < size ** 2; i++) {
        const CELL_WIDTH = Math.floor(GRID_WIDTH_PX / size);
        const cell = document.createElement('div');
        cell.style.width = `${CELL_WIDTH}px`;
        cell.style.height = `${CELL_WIDTH}px`;
        cell.addEventListener('mouseenter', hoverEffect);
        grid.appendChild(cell);
    }
}

createGrid();

const button = document.querySelector('button');
button.addEventListener('click', _ => {
    const size = +prompt('Give a number between 0 and 100');
    if (typeof size == 'number' && size > 0 && size <= 100) {
        sizeInt = Math.floor(size);
        destroyGrid();
        createGrid(sizeInt);
    }
})