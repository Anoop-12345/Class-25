class Bird extends BaseClass{
  //Create a constructor
  constructor(x,y){
    super(x,y,50,50);
    //load image
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //Move the bird along with the movement of the mouse cursor
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}