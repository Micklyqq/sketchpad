const divSize = 16;

function createSketchpadGrid(containerWidth, elementSize){
    const container = document.querySelector('.container');
    container.innerHTML = '';

    elementSize = elementSize == undefined ? 16 : elementSize;
    containerWidth = containerWidth == undefined ? container.clientWidth : containerWidth;
    
    const squaresPerRow = Math.trunc(containerWidth/elementSize);
    const squaresPerColumn = Math.trunc(containerWidth/elementSize);
    const totalSquares = squaresPerRow * squaresPerColumn;

    for(let i = 0; i < totalSquares; i++){
        let div = document.createElement('div');
        div.classList.add('element');
        div.id = 'element';
        div.style.minWidth = `${elementSize}px`;
        elementHoverEffect(div);
        container.append(div);
    }
}

function elementHoverEffect(element, color){
    const prevHandler = hoverHandlersMap.get(element);

    if(prevHandler){
        element.removeEventListener('mouseenter', prevHandler);
    }

    function handleHover(event){
        let target = event.target;
        target.style.backgroundColor = color == undefined ? 'white' : color;
    }
    
    element.addEventListener('mouseenter', handleHover);
    hoverHandlersMap.set(element, handleHover);
}

function sketchReset(){
    const container = document.querySelector('.container');
    const elements = container.children;

    for(let element of elements){
        element.style.backgroundColor = '#101828';
    }
}

function resizeSketchpadGrid(){
    while(true){
        let userRequest = parseInt(prompt('Enter grid number (1 - 100)'));
        if(userRequest == NaN || 1 > userRequest > 100){
            alert('Invalid value, please enter again');
            continue;
            
        } else {
            const containerSize = document.querySelector('.container').clientWidth
            const elementSize = calculateGridElementSize(userRequest, containerSize);

            createSketchpadGrid(undefined,elementSize);
            break;
        }
    }
}

function calculateGridElementSize(numberOfElements, containerSize){
    return Math.trunc(containerSize/numberOfElements);
}

function enableRandomColorMode(){
    const container = document.querySelector('.container');
    const elements = container.children;
    
    for(let element of elements){
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        elementHoverEffect(element, randomColor);
    }
}

const hoverHandlersMap = new WeakMap();
const randomColorButton = document.querySelector('#random-color-mode-button');
randomColorButton.addEventListener('click', enableRandomColorMode);

createSketchpadGrid();

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', sketchReset);

const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', resizeSketchpadGrid);




