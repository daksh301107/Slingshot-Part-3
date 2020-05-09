class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 50;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-9;
        tint (255,this.visibility);
        
       // image(this.image, this.body.position.x,this.body.position.y, 50, 50);
        pop();
      }
  
    }
   

  };