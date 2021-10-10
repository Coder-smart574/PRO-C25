class BaseClass {

  constructor(x,y,width,height){
   
   var options = {

       friction: 0.8,
       density: 1

      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        translate(pos.x, pos.y);

	}

}