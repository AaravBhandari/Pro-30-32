class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility=255
      }
      
      display() {
        var pos = this.body.position;
        var angle = this.angle;
     
        if (this.body.speed < 10) {
            push();
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill("red");
           
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }
      
    }
    score(){
        if (this.visibility < 0 && this.visibility > -250){
          score++;
        }
      }
}