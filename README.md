# useless-machine

Se tiene tres circulos de diferente color cada uno, y dos botones con diferentes funciones

![imag](http://i68.tinypic.com/qq4nzl.png)

1- BOTON CRI:

- Primer Click: se agregara un borde negro al primer circulo (blue) y aparecera el nombre del color "Blue" en el input.
- Segundo Click: se removera el borde del primer circulo (blue) y sera turno para agregar el borde al segundo circulo (rojo). Aparecera nombre del color "Red" en el input.
- Tercer Click: se remueve el borde de (red) y se agrega el borde del tercer circulo (yellow), el nombre del color "Yellow" tambien aparecera en el input.

```javascript
window.addEventListener("load", function() {
  var cri = document.getElementById("cri"); 
  /* Se declara un contador para realizar la accion de cada click */
  var counter = 1;
  cri.addEventListener("click", function() {
  /* Primer Click */
    if (counter == 1) {
      document.getElementById("blue");
      document.getElementById("color").placeholder = "Blue";
      document.getElementById("blue").classList.add("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
  /* Segundo Click */
    if (counter == 2) {
      document.getElementById("red");
      document.getElementById("color").placeholder = "Red";
      document.getElementById("red").classList.add("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }  
  /* Tercer Click */
    if (counter == 3) {
      document.getElementById("yellow");
      document.getElementById("color").placeholder = "Yellow";
      document.getElementById("yellow").classList.add("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
  /* Contador vuelve a 0, para empezar de nuevo */
      counter = 0;
    }
    counter++;

  });

});
```

2- BOTON SUPERCRI

- Se ingresara en el input el nombre del color del circulo (ingles) al cual queremos agregar el borde negro.
- Hacer click en SUPERCRI.
- Borde negro se agregara al circulo elegido, mas no en los otros.

```javascript
window.addEventListener("load", function() {
   var supercri = document.getElementById("supercri");
   supercri.addEventListener("click", function() { 
    var color = document.getElementById("color").value;
  /* Al ingresar blue*/
    if(color == "blue"){
      document.getElementById("blue").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    } 
  /* Al ingresar red */  
      else if(color == "red"){
      document.getElementById("red").classList.toggle("border");
      document.getElementById("blue").classList.remove("border");
      document.getElementById("yellow").classList.remove("border");
    }
  /* Al ingresar yellow*/  
      else if(color == "yellow"){
      document.getElementById("yellow").classList.toggle("border");
      document.getElementById("red").classList.remove("border");
      document.getElementById("blue").classList.remove("border");
    }

  });

 });
 ```
 
 

