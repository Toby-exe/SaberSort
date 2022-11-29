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
let shrink = 1.3;
let gap
let FPS = 120;

let widthControl = 1;
let swapCount = 0;

/**testing */
let x1;
let x2;

let x = 0;

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
  gap = Math.floor(arr.length / shrink);
  frameRate(120);
  
  initDocumentObjects();
}

function draw() {
  background(0);
  
  renderArray();

  if(playClicked) {
       
    if (!sortDone) {
      
      if (!renderDone) {
        //render next frame of swap animation
        swap();
      } else if (i + gap < arr.length - 1) {
        //check for a swap at the next index
        i++;
        renderDone = false;
        //sortDone = false;
  
      } else {
        //update gap when the old one has gone through the array
        renderDone = false;
        if(swapCount == 0 && gap == 1){
          sortDone = true;
        }
        i = 0
        swapCount = 0;
        console.log("updating gap");
        console.log("old gap: " + gap);

        gap = Math.floor(gap / shrink);
        if (gap < 1) {
          gap = 1;
        }

        console.log("new gap: " + gap);
      }
    } 
  }
}



async function swap() {

  //console.log("swap called");

  if (!startSwap) {
    console.log("=================== checking ===================");

    // x1 = arr[i].getxPos ;
    // x2 = arr[i + gap].getxPos;
    x1 = arr[i].getxPos;
    x2 = arr[i + gap].getxPos;
    
    highlightElements();
    startSwap = true;
  }

  if (arr[i].getHeight > arr[i + gap].getHeight) {
    
    animateSwap();
    
  } else {
    // if 2 elements dont need to be swapped then treat it as finishing the render
    noSwap();
    return;
  }

  if (arr[i].getxPos == x2 && arr[i + gap].getxPos == x1) {
    swapIndex();
    
  }

}

async function swapIndex() {
  tmp = arr[i];
  arr[i] = arr[i + gap];
  arr[i + gap] = tmp;
  swapCount++;
  
  //reset colors after a move
  arr[i].setColor = 255;
  arr[i + gap].setColor = 255;

  renderDone = true;
  startSwap = false;
  //sortDone = false;

  xRight = 0;
  xLeft = 0;
}

async function animateSwap() {
  //console.log("rendering swap");
  //animate swap
  
  arr[i].setColor = '#0fbef9';
  arr[i + gap].setColor = '#9dfc6a';
  arr[i].moveRight(x2 - x1);
  arr[i + gap].moveLeft(x1 - x2);
  //sortDone = false;
}

async function highlightElements () {
  
  noLoop();
  console.log("highlighting elements");
  arr[i].setColor = '#ff0000'; 
  arr[i].display();
  arr[i + gap].setColor = '#ff0000';
  arr[i + gap].display();
  await sleep(300)
  loop();

}

function noSwap() {
  arr[i].setColor = 255;
  arr[i + gap].setColor = 255;

  renderDone = true;
  startSwap = false;
  //sortDone = false;

  xRight = 0;
  xLeft = 0;
}


async function renderArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].display();
  }
}

async function initArr() {
  let frameGap = 20; // this mean new canvas will be 1360px wide
  let offset = (canvasWidth - (frameGap * 2)) / arr.length;
  //if width is max then offset = 0;


  for (let i = 0; i < arr.length; i++) {
    arr[i].setyPos = canvasHeight - arr[i].getHeight;
    arr[i].setxPos = i * offset + frameGap;
    arr[i].setWidth = offset / widthControl;
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function reset() {
  //refresh page
  //location.reload();

}


