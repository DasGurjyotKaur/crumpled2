class Paper {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.6,
        density:1.2
      }
    this.body = Bodies.circle(x,y,70,options);
    this.r=70;
     this.image = loadImage("sprite/imageP.png");
      World.add(world, this.body);
    }
    display(){
  
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
    }
 
  } 