
var previous;
var previousName;

function showPrevious() {
  
  document.getElementById("starwars").innerHTML = previousName;

  let image2 = `<img src='${previous}' id="character"/>`;
                   
  document.getElementById("image").innerHTML = image2;

}

function showStarWars() {
  let random = (Math.floor(Math.random() * 88));
let url = 'https://akabab.github.io/starwars-api/api/id/' + random + '.json';
    fetch(url)
                .then(response => response.json())
                .then(data => {

                    previousName = document.getElementById("starwars").textContent;

                    document.getElementById("starwars").innerHTML = data.name;
                    
                    let src = data.image;

                    previous = document.getElementById("character").src;

                    let image = `<img src='${src}' id="character"/>`;
                   
                    document.getElementById("image").innerHTML = image;
                    
                   
                  
                });
}



function hyper() {
  document.getElementById("hyperspace").load();
  document.getElementById("ship1").style.display = "none";
  document.getElementById("ship2").style.display = "none";
  document.getElementById("ship3").style.display = "none";
  
  document.getElementById("hyperspace").style.display = "block";
  
 
  
  $('video').on('ended',function(){ $(this).hide();$("#starDestroyer").show() });
   
  document.getElementById("naboo").src = 'images/tatooine.gif';
  document.getElementById("deathS").src = 'images/unfinishedStar.png';

  }

  


$(document).ready(function(e) {
  function goRight() {
    $(".ship3").animate({
    left: 900
    
  }, 5000, function() {
     setTimeout(goLeft, 50);
  });

}
function goLeft() {
    $(".ship3").animate({
    left: 0
  }, 5000, function() {
     setTimeout(goRight, 50);
  });
 
}
setTimeout(goRight, 50);
});
 



$(document).ready(function(e) {
  function goRight() {
      $(".shipRebel").animate({
      left: 1000
      
    }, 5000, function() {
       setTimeout(goLeft, 50);
    });
  
  }
  function goLeft() {
      $(".shipRebel").animate({
      left: 0
    }, 5000, function() {
       setTimeout(goRight, 50);
    });
   
  }
  setTimeout(goRight, 50);
});

$(document).ready(function(e) {
  function goRight() {
      $(".ship2").animate({
      left: 900
      
    }, 5000, function() {
       setTimeout(goLeft, 50);
    });
  
  }
  function goLeft() {
      $(".ship2").animate({
      left: 0
    }, 5000, function() {
       setTimeout(goRight, 50);
    });
   
  }
  setTimeout(goRight, 50);
});



