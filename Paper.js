class Paper extends BaseClass {
    constructor(x, y, width, height) {

        super(x, y, width, height);
        this.image = loadImage("paper.png");

    }
    display() {

        var pos = this.body.position;
        push();
        imageMode(CENTER);
        super.display();
        image(this.image, 0, 7, this.width, this.height);
        pop();
    }

    update() {

        if (keyWentDown("space")) {
            
            Matter.Body.applyForce(this.body, this.body.position, { x: 65, y: -100 });
        }
    }
}