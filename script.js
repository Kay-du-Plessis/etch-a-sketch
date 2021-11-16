const gridDiv = document.querySelector('#grid');

function makeGrid (x) {
    
    gridDiv.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    for(let x=0;  x< 64; x++) {
        const div = document.createElement('div');
        div.classList.add("divBlock");
        div.textContent = "lorem";
        div.style.border = '1px solid black'
        gridDiv.appendChild(div);
    }
}

makeGrid(64)