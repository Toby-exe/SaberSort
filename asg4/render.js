const MIN_HEIGHT = 100;
const MAX_HEIGHT = 700;
let canvasWidth = 1400;
let canvasHeight = 900;
let tmp;
let testCounter = 0;
let playClicked;
let arr = [];
let numberOfElements;
let loadFactor;
let counter = 0;

let startSwap = false;
let i = 0;
let renderDone = false;
let sortDone = false;
let sorted = true;
let shrink = 1.3;
let gap

//let swap = false;

/**testing */
let x1;
let x2;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  /*** for no number of elements will be hard coded to 15 
   * we will get his from user input later 
  */
  numberOfElements = 12;
  loadFactor = 12;

  for (let i = 0; i < numberOfElements; i++) {
    arr.push(new Bar());
  }
  
  initArr();
  gap = arr.length - 1;
  frameRate(1000);
  
  initDocumentObjects();
}

function draw() {
  background(0);


  renderArray();
  
  if (playClicked) {
    if (gap < 1) {
      gap = 1;
  
    }
    if (!renderDone) {
      //render next frame of swap animation
      swap();
  
    } else if (i + gap < arr.length - 1) {
      //check for a swap at the next index
      i++;
      renderDone = false;
      
    } else {
      renderDone = false;
      i = 0
      gap = Math.floor(gap / shrink);
    }
    
  }
}


function swap() {

  if (!startSwap) {

    x1 = arr[i].getxPos
    x2 = arr[i + gap].getxPos;

    startSwap = true;
  }

  if (arr[i].getHeight > arr[i + gap].getHeight) {

    //console.log("rendering swap");
    //animate swap
    arr[i].setColor = '#0fbef9';
    arr[i + gap].setColor = '#0fbef9';
    arr[i].moveRight(x2 - x1);
    arr[i + gap].moveLeft(x1 - x2);
   
  } else {
    // if 2 elements dont need to be swapped then treat it as finishing the render
    renderDone = true;
    startSwap = false;
    return;
  }
  
  if (arr[i].getxPos == x2 && arr[i + gap].getxPos == x1) {

    //swap for real is fr
    tmp = arr[i];
    arr[i] = arr[i + gap];
    arr[i + gap] = tmp;

    arr[i].setColor = 255;
    arr[i + gap].setColor = 255;

    renderDone = true;
    startSwap = false;
    sorted = false;

    xRight = 0;
    xLeft = 0;
  }

}

async function renderArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].display();
  }
}

async function initArr() {
  clear();
  let width = 40;
  let frameWidth = canvasWidth - 100;   //50px padding on each end
  let offset = round(frameWidth / arr.length);

  for (let i = 1; i <= arr.length; i++) {
    arr[i - 1].setyPos = canvasHeight - arr[i - 1].getHeight;
    arr[i - 1].setxPos = i * offset;
    arr[i - 1].setWidth = width;
  }
}

function reset() {
  playClicked = false;
  //TODO: refresh the height of all bars 
}
