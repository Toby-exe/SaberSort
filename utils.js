let xLeft = 0;
let xRight = 0;
let animSpeed = 25;
let moveDone;

class Bar {
    constructor() {
        this.height = random(MIN_HEIGHT, MAX_HEIGHT);
        this.xPos = 0;
        this.yPos = 0;
        this.width = 0;
        //this.color = '#FFFFFF';
        this.color = 'blue';
    }

    display() {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
    }

    moveRight(xDisp) {
        //push();

        //console.log("translating right")

        //translate(xRight, 0);
        this.display();
        if(xRight < xDisp) {
            //make slowdown loop acceleration
            if(xRight + animSpeed > xDisp) {
                xRight++;
                //this.setxPos = this.getxPos + 1;
                this.setxPos = x2;
            } else {
                xRight +=animSpeed;
                this.setxPos = this.getxPos + animSpeed;
            }
            //this.setxPos = this.getxPos + 1;
        } 

        // console.log("move right: " + this.getxPos)
        //pop();
    }

    moveLeft(xDisp) {
        //push();

        console.log("translating left")
        
        //translate(xLeft, 0);
        this.display();
        if(xLeft > xDisp) {
            if(xLeft - animSpeed < xDisp){
                xLeft--;
                //this.setxPos = this.getxPos - 1;
                this.setxPos = x1;
            } else{
                xLeft-=animSpeed;
                this.setxPos = this.getxPos - animSpeed;
            }
            //this.setxPos =  this.getxPos - 1;
        }

        // console.log("move left: " + this.getxPos)

        //pop();
    }

   
    get getHeight() {
        return this.height;
    }

    get getxPos () {
        return this.xPos;
    }

    get getyPos () {
        return this.yPos;
    }

    get getColor () {
        return this.color;
    }

    /**
     * @param {number} height
     */
    set setHeight(height) {
        this.height = height;
    }
    /**
     * @param {number} floorPosition
     */
    set setxPos (floorPosition) {
        this.xPos = floorPosition;
    }
    /**
     * @param {number} yPosition
     */
    set setyPos (yPosition) {
        this.yPos = yPosition;
    }
    /**
     * @param {number} width
     */
    set setWidth (width) {
        this.width = width;
    }
    /**
     * @param {any} r
     * @param {any} newColor
     */
    set setColor (newColor) {
        this.color = newColor;
    }

}


