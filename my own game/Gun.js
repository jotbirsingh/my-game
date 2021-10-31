class Gun{
    constructor(x,y,w,h,angle){
        var option={
            isStatic: true

        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle;
        this.body =Bodies.rectangle(this.x,this.y,this.w,this.h,option);
        //this.image=loadImage("game image/gun.jpg");
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle =this.body.angle;

     rect(pos.x,pos.y,pos.w,pos.h);
     
    }
}