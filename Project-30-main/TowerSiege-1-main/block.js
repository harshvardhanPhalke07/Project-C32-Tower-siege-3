class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
   display(){
   this.v=255
   if(this.body.speed >3){
     this.v= this.v-5
   }
   
    tint (255,this.v)
   }
  
  }
  var Score=0;

 function score()
{
  if (this.v<0 && this.v>-105){
    score++
  }
}
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();