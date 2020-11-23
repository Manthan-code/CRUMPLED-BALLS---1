class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.radius=20;
      //  this.body=loadImage("Name.png");
        World.add(world, this.body);
    }
    display(){
        //image(this.body,200,200);

        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
 
    }
}