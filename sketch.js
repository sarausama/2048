function setup() {
  createCanvas(600, 600);
  boxes = [];
  for(i=0; i<4; ++i){
    for(j=0; j<4; ++j){
    boxes[i*4+j] = new box(150*j,150*i); 
    }
  }
  Random();
  Random();
}
let game;
function draw() {
  background(220);
  game = false;
for(i=0; i<4; ++i){
    for(j=0; j<4; ++j){
    boxes[i*4+j].display();
      if(boxes[i*4+j].number == 0){
        game = true;
      }
    }
  }
  if(game == false){
    let test = true;
    for(i=0; i<4; ++i){
      for(j=0; j<3; ++j){
        temp = i+j*4;
        for(k=1; k<4-j; ++k){
          if(boxes[temp +k*4].number !=0){
            if(boxes[temp].number == 0){
               test = false;
               game = true;
            }else if(boxes[temp].number == boxes[temp+k*4].number){
                test = false;
                game = true;
                break;
              }else{break;}
            }
          }
        }
      }
    for(i=4; i>0; --i){
        for(j=3; j>0; --j){
          temp = i+j*4-1;
          for(k=1; k<j+1; ++k){
            if(boxes[temp -k*4].number !=0){
              if(boxes[temp].number == 0){
                test = false;game = true;
            }else if(boxes[temp].number == boxes[temp-k*4].number){
                test = false;game = true;
                break;
              }else{break;}
            }
          }
        }
      }
    for(i=0; i<4; ++i){
        for(j=3; j>0; --j){
          temp = i*4+j;
          for(k=1; k<j+1; ++k){
            if(boxes[temp -k].number !=0){
              if(boxes[temp].number == 0){
                test = false;game = true;
              }else if(boxes[temp].number == boxes[temp-k].number){
                test = false;game = true;
                break;
              }else{break;}
            }
          }
        }
      }
    for(i=0; i<4; ++i){
        for(j=0; j<3; ++j){
          temp = i*4+j;
          for(k=1; k<4-j; ++k){
            if(boxes[temp +k].number !=0){
              if(boxes[temp].number == 0){
                test = false;game = true;
              }else if(boxes[temp].number == boxes[temp+k].number){
                test = false;game = true;
                break;
              }else{break;}
            }
          }
        }
      }
    if(test){
    textSize(100);
    textAlign(CENTER);
  	text("Game Over", width/2, height/2 +25);
  }
  }
}

function Random() {
  x = Math.floor(Math.random() * 16 );
  while (boxes[x].number != 0){
  x = Math.floor(Math.random() * 16 );
  }
  if(Math.random()<0.6){
  boxes[x].number = 2;
  } else {
  boxes[x].number = 4;
  }
}

function keyPressed() {
  change = false;
  if(keyCode == 32){
  setup();
  }
    if (keyCode == UP_ARROW && game == true) {
      for(i=0; i<4; ++i){
        for(j=0; j<3; ++j){
          temp = i+j*4;
          for(k=1; k<4-j; ++k){
            if(boxes[temp +k*4].number !=0){
              if(boxes[temp].number == 0){
                boxes[temp].number = boxes[temp+k*4].number;
                boxes[temp +k*4].number =0;
                change = true;
              }else if(boxes[temp].number == boxes[temp+k*4].number){
                boxes[temp].number *=2
                boxes[temp +k*4].number =0;   
                change = true;
                break;
              }else{break;}
            }
          }
        }
      }
    } else if (keyCode == DOWN_ARROW && game == true) {
      for(i=4; i>0; --i){
        for(j=3; j>0; --j){
          temp = i+j*4-1;
          for(k=1; k<j+1; ++k){
            if(boxes[temp -k*4].number !=0){
              if(boxes[temp].number == 0){
                boxes[temp].number = boxes[temp-k*4].number;
                boxes[temp -k*4].number =0;
                change = true;
              }else if(boxes[temp].number == boxes[temp-k*4].number){
                boxes[temp].number *=2
                boxes[temp -k*4].number =0; 
                change = true;
                            break;
              }else{break;}
            }
          }
        }
      }
    } else if (keyCode == RIGHT_ARROW && game == true){
      for(i=0; i<4; ++i){
        for(j=3; j>0; --j){
          temp = i*4+j;
          for(k=1; k<j+1; ++k){
            if(boxes[temp -k].number !=0){
              if(boxes[temp].number == 0){
                boxes[temp].number = boxes[temp-k].number;
                boxes[temp -k].number =0;
                change = true;
              }else if(boxes[temp].number == boxes[temp-k].number){
                boxes[temp].number *=2
                boxes[temp -k].number =0;
                change = true;
                break;
              }else{break;}
            }
          }
        }
      }
    } else if (keyCode == LEFT_ARROW && game == true){
      for(i=0; i<4; ++i){
        for(j=0; j<3; ++j){
          temp = i*4+j;
          for(k=1; k<4-j; ++k){
            if(boxes[temp +k].number !=0){
              if(boxes[temp].number == 0){
                boxes[temp].number = boxes[temp+k].number;
                boxes[temp +k].number =0;
                change = true;
              }else if(boxes[temp].number == boxes[temp+k].number){
                boxes[temp].number *=2
                boxes[temp +k].number =0;
                change = true;
                break;
              }else{break;}
            }
          }
        }
      }
    }
  if(change == true){Random();}
}




