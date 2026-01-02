const container = document.getElementById('container')
const resetBtn = document.getElementById('resetBtn')


function createGrid(size) {
    container.innerHTML = ''
    
    const squareSize = 100 / size

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square')

        square.style.width = `${squareSize}%`
        square.style.height = `${squareSize}%`

        square.addEventListener('mouseover', changeColor)

        container.appendChild(square)
        
    }
}

