class Stone{
    constructor(x,y,width,height)
    {
       var options={
       "restitution":0.8,    
       "friction":0.,
       "density":12
       }
       this.body=Bodies.rectangle(x,y,widthheight,options);
       this.width;
       this.height;

       World.add(world,this.body);

    }
    display()
    {
    var pos=this.body.position;
    var angle=tis.body;angle;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)
    strokeWeight(4)
    stroke("violet")
    fill("purple")
    ellipse(0,0,this.width,this.height);
    pop()

    }

}