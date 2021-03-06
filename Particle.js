function Particle(x,y, hu, firework){
   this.pos = createVector(x,y); // starting position
   this.firework = firework;
   this.lifespan = 255; //lifespan per frame
   this.hu = hu; //colorMode
    if (this.firework) {
      this.vel = createVector(0, random(-12, -8));
    }
    else {
        this.vel = p5.Vector.random2D(); // simulate the explosion
        this.vel.mult(random(2.5,6));
    }
      this.acc = createVector(0,0);

    this.applyForce = function(force){
      this.acc.add(force);
    }
    this.update = function (){
       if (!this.firework){
         this.vel.mult(0.9);
         var a = random(2, 12);
         this.lifespan -= a; // reduce the lifespan per frame
       }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.done = function(){
        if(this.lifespan < 0){
          return true;
        }
        else {
          return false;
        }
    }
    this.show = function(){
      colorMode(HSB);
      if (!this.firework){
        strokeWeight(2);
        stroke(hu, 255, 255, this.lifespan);
      }
      else {
        strokeWeight(4);
        stroke(hu, 255, 255);
      }
      point(this.pos.x, this.pos.y);
    }

}
