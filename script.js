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

function changeColor(e) {

    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)

    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

resetBtn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):")

    newSize = parseInt(newSize)

    if (newSize > 0 && newSize <= 100){
        createGrid(newSize)
    } else {
        alert ("Please enter a valid number between 1 and 100.")
    }
})

createGrid(16)