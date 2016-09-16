/* SUPERCRI */

window.addEventListener("load", function() {
   var supercri = document.getElementById("supercri");
   supercri.addEventListener("click", function() { 
    var color = document.getElementById("color").value;

    if(color == "blue"){
      document.getElementById("blue").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    } 
      else if(color == "red"){
      document.getElementById("red").classList.toggle("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
      else if(color == "yellow"){
      document.getElementById("yellow").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
    }

  });

 });

/* CRI */

window.addEventListener("load", function(){
  var cri = document.getElementById("cri");
  var counter = 1;
  cri.addEventListener("click", function() {
    if (counter == 1) {
      document.getElementById("blue");
      document.getElementById("color").placeholder = "Blue";
      document.getElementById("blue").classList.add("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
    if (counter == 2) {
      document.getElementById("red");
      document.getElementById("color").placeholder = "Red";
      document.getElementById("red").classList.add("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }  
    if (counter == 3) {
      document.getElementById("yellow");
      document.getElementById("color").placeholder = "Yellow";
      document.getElementById("yellow").classList.add("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
      counter = 0;
    }
    counter++;

  });

});
  

 
