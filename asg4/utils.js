let xLeft = 0;
let xRight = 0;
let moveDone;

class Bar {
    constructor() {
        this.height = random(MIN_HEIGHT, MAX_HEIGHT);
        this.xPos = 0;
        this.yPos = 0;
        this.width = 0;
        this.color = '#FFFFFF';
    }

    display() {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
    }

    moveRight(xDisp) {
        push();


        translate(xRight, 0);

        //console.log("translating right")
        
        if(xRight < xDisp) {
            xRight++;
            this.setxPos = this.getxPos + 1;
        } 

        //console.log("move right: " + this.getxPos)
        pop();
    }

    moveLeft(xDisp) {
        push();

        //console.log("translating left")

        translate(xLeft, 0);
        if(xLeft > xDisp) {
            xLeft--;
            this.setxPos = this.getxPos - 1;
        }

        //console.log("move left: " + this.getxPos)

        pop();
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


