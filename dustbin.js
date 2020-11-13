class DUSTBIN{

    constructor(x,y,width,heigth){
        var options={
            'isStatic':true
        }
        this.body1=Bodies.rectangle(x,y,width,heigth,options);
        World.add(world,this.body1);
        
        this.body1.width=width;
        this.body1.heigth=heigth;
    }

    display(){
        fill("white");
        rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.heigth);
        

    }
}