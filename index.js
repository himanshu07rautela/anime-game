var colors = ["green", "red", "orange", "yellow", "blue", "purple"];
var index = 0;
var started = false;
var audio;
var isrunning=true;
var b=[];
var i=0;
var ispressing=true;

var finalmusic=true;

$("#clickable").click(function() {
  finalmusic=false;
  isrunning=true;
  if (!started) {
    $("h1").text("Close your eyes and press k key!");
    audio = new Audio("gamemusic.wav");
    audio.play();

    rotation();

    started = true;
    ispressing=true;
  }
});

function rotation() {
  if(isrunning){
  if (index < 6) {
    $("#" + colors[index]).addClass('going');
    setTimeout(function() {
      $("#" + colors[index]).removeClass('going');
      index++;
      rotation();
    }, 250);
  } else {
    index = 0; 
    rotation();// Reset index after completing a rotation
  }
}
}

$(document).keydown(function(event) {
  if(ispressing){
  
  if($(".btn").length===2){
    
    $("h1").text("HERE is your final character");
    var k=new Audio("gamemusic.wav");

    if(finalmusic==true){
      k.play();
      finalmusic=false;

    }
    
    
  }else{
    $("h1").text("Now one of your fav characters will disappear,click again and play,till only one of them is left");
  }

 
  isrunning=false;
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
  }
 
  addingpress();

  started = false;
  if($(".btn").length==1){
    
    $("h1").text("HERE is your character! click on it to know more!");
  }

  ispressing=false;
  }
});

function check(rando,b,i){
for(var j=0;j<i;j++){
  if(rando==b[j]){
    return 0;
  }
}
return 1;
}


function addingpress(){
  var rando = Math.floor(Math.random() * (6));
  if(check(rando,b,i)==1){
    $("#" + colors[rando]).addClass('pressed');
    b[i]=rando;
    i++;
    setTimeout(function(){
    
        if(rando===0){
        $("#" + colors[0]).remove();
       
        
        }
        else if(rando===1){
          $("#" + colors[1]).remove();
        
       
    
        }else if(rando===2){
          $("#" + colors[2]).remove();
          
        }else if(rando===3){
          $("#" + colors[3]).remove();
          
        }else if(rando===4){
          $("#" + colors[4]).remove();
          
        }else if(rando===5){
          $("#" + colors[5]).remove();
         
        }
        
    
    
    
      },2000)
      


  }else{
    var rando = Math.floor(Math.random() * (6));
    addingpress();
  }
}