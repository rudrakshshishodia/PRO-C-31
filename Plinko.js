class Plinko{
    constructor(x,y){
        var options={
            restitution: 0,
            isStatic: true,
            friction: 0,

        }
        this.x=x;
        this.y=y;
        this.r=10;

        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    };
}
