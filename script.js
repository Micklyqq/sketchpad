const divSize = 16;

function fillDisplayWithSquares(containerWidth = null, elementSize = null){
    const container = document.querySelector('.container');
    elementSize = elementSize ? elementSize : 16;
    containerWidth = containerWidth ? containerWidth : container.clientWidth;
    
    const squaresPerRow = Math.trunc(containerWidth/elementSize);
    const squaresPerColumn = Math.trunc(containerWidth/elementSize);
    const totalSquares = squaresPerRow * squaresPerColumn;

    for(let i = 0; i < totalSquares; i++){
        let div = document.createElement('div');
        div.classList.add('element');
        div.id = 'element';
        div.style.minWidth = `${elementSize}px`;
        container.append(div);
    }
}



fillDisplayWithSquares();
