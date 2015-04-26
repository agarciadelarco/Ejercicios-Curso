var rover = {
  position: [0,0], 
  direction: 'N'
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }
}


function goBack(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  }
}


function turnLeft(rover){
  if (rover.direction = 'N'){
    rover.direction = 'W';
  }else if(rover.direction = 'E'){
    rover.direction = 'N';
  }else if(rover.direction = 'S'){
    rover.direction = 'E';
  }else{
    rover.direction = 'S';
  }
}

function turnRight(rover){
  if (rover.direction = 'N'){
    rover.direction = 'E';
  }else if(rover.direction = 'E'){
    rover.direction = 'S';
  }else if(rover.direction = 'S'){
    rover.direction = 'W';
  }else{
    rover.direction = 'N';
  }
}

function order(){
  var question = prompt('Which path do you want the Mars Rover go through?');
  question = question.toLowerCase();
  question = question.split("");
  switch (question){
    case 'f':
      goForward(rover);
      break;
    case 'b':
      goBack(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
  }
  alert('Mars Rover is in [' + rover.position + '].')
}

order();