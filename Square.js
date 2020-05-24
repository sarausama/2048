class box{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.height = 140;
    this.width = 140;
    this.number = 0;
  }
  
  display(){
    if(this.number == 0){
    fill(0);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 2){
    fill(102,255,255);
    rect(this.x, this.y, this.width, this.height);    
    } else if(this.number == 4){
    fill(255,51,153);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 8){
    fill(50,0,250);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 16){
    fill(153,0,204);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 32){
    fill(102, 255, 153);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 64){
    fill(255, 102, 0);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 128){
    fill(121, 121, 210);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 256){
    fill(0,255,0);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 512){
    fill(255, 102, 102);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 1024){
    fill(255, 255, 0);
    rect(this.x, this.y, this.width, this.height);
    } else if(this.number == 2048){
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
    } else {
    fill(102,255,255);
    rect(this.x, this.y, this.width, this.height);    
    }
    fill(0)
    if(this.number != 0){
    textSize(50);
    textAlign(CENTER);
  	text(this.number, this.x + 75, this.y + 80);
    }
  }
  
}