var contador = 0;
const mensaje = "Buenos Dias";
function Contar() {
  var elem = document.getElementById("para0"); // ambito local
  contador += 1; // contador = contador + 1;
  console.log(contador);
  // alert(contador);
  elem.textContent = contador;
  var elem2 = document.getElementById("titulo");
  elem2.textContent = mensaje + " " + contador;
}

function changeColor(newColor) {
  var elem = document.getElementById("para");
  console.log(newColor);
  elem.style.background = newColor;

  ///    if (newColor = "Blue"){
  //     elem.className="caja2";
  /*  }else{
            elem.className="caja1";
           } */
}

function changeEstilo(newEstilo) {
  var elem = document.getElementById("para3");
  //  console.log(newEstilo)
  elem.className = newEstilo;
}

function changeTexto(newTexto) {
  var texto1 =
    "La función promt() nos permite abrir un cuadro de diálogo al usuario para que introduzca un dato. Podemos pasarle como parámetro una cadena de caracteres que se mostrará y nos devuelve una cadena de texto.";
  var texto2 =
    "The promt () function allows us to open a dialog box for the user to enter data. We can pass it as a parameter a string of characters that will be displayed and it returns a text string.";
  var texto3 =
    "La fonction promt () nous permet d'ouvrir une boîte de dialogue permettant à l'utilisateur de saisir des données. On peut lui passer en paramètre une chaîne de caractères qui sera affichée et elle renvoie une chaîne de texte.";
  var elem = document.getElementById("para5");
 // console.log("Valor que se carga al hacer click en el boton " + newTexto);
  if (newTexto == "t1") {
 //   console.log(newTexto = "t3"); 
    elem.textContent = texto1;
  } else if (newTexto == "t2") {
//      console.log(newTexto = "t2");
      elem.textContent = texto2;
    } else if (newTexto == "t3") {
 //       console.log(newTexto = "t3");
        elem.textContent = texto3;
      }
 }

 function misparrafos() {
     var p0 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione a commodi amet nesciunt corrupti facilis molestias beatae fuga voluptates, hic libero alias accusantium possimus quisquam sint soluta reiciendis recusandae.";

     var texto = document.getElementById("mparra");
     var p1 = document.createElement("p");
     p1.innerHTML = p0;     
     texto.appendChild(p1);
     }

     function llenarYear(){
        select = document.getElementById("año");
        for(i = 2000; i <= 2050; i++){
          option = document.createElement("option");
          option.value = i;
          option.text = i;
          select.appendChild(option);
        }
     }

     function llenarDias(){
         Dias=["Lunes", "Martes", "Miercoles", "Jueves","Viernes","Sabado", "Domingo"];
        select = document.getElementById("dia");
        for(i = 0; i <= 7; i++){
          option = document.createElement("option");
          option.value = i;
          option.text = Dias[i];
          select.appendChild(option);
        }
     }

 function generaTabla() {   
        // get the reference for the body
        var mybody = document.getElementsByTagName("body")[0];

        // creates <table> and <tbody> elements
        mytable     = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j < 7; j++) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");

            for(var i = 0; i < 5; i++) {
                // creates a <td> element
                mycurrent_cell = document.createElement("td");
                // creates a Text Node
                currenttext = document.createTextNode("cell is row " + j + ", column " + i);
                // appends the Text Node we created into the cell <td>
                mycurrent_cell.appendChild(currenttext);
                // appends the cell <td> into the row <tr>
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // appends the row <tr> into <tbody>
            mytablebody.appendChild(mycurrent_row);
        }

        // appends <tbody> into <table>
        mytable.appendChild(mytablebody);
        // appends <table> into <body>
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
    }

