class Divisions {
   constructor(x,y,w,h){
        var options={
             isStatic: true
        }
        
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        
        this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world,this.Body);


   }

   display(){
       var pos=this.body.position;
       rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
   }

}