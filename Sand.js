class Sand{
    constructor(x,y,r)
    {
       var options={
       restitution:0.3,    
       friction:5,
       density:3
       }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(this.x,this.y(this.r-20)/2, options)
       World.add(world,this.body);

    }
    display()
    {
    var sandpos=this.body.position;
    Push()
    translate(sandpos.x,sandpos.y);
    rectMode(CENTER)
    strokeWeight(4)
    stroke("maroon")
    fill("red")
    ellipse(0,0,this.r,this.r);
    pop()

    }

}