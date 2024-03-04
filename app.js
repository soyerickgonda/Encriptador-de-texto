//EXTRAEMOS ALGUNOS ELEMENTOS DEL DOM PARA SU MANIPULACION
const textarea = document.getElementById("mitextarea"); //<textarea id="mitextarea">
const btnencriptar = document.getElementById("encriptar");
const btndesencriptar = document.getElementById("desencriptar");

//EXTRAEMOS el conatiner-right para luego reemplazar su contenido con todo lo creado para los botones (encriptado/desencriptado)
const containerRight = document.getElementById("container-right");

//ENCRIPTADO
//creamos un DIV que servira como contenedor para los elementos del encriptado
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "container-encriptado");

//creamos un DIV interno que servira como contenedor para el tag <textarea>
const containerTextEncrip = document.createElement("div");
containerTextEncrip.setAttribute("id", "container-textarea-encrip");
const newTextareaEncrip = document.createElement("textarea"); //creamos un nuevo <textarea>
newTextareaEncrip.setAttribute("id", "textareaEncriptado");
containerTextEncrip.appendChild(newTextareaEncrip);
newDiv.appendChild(containerTextEncrip);

//Boton para copiar el texto Encriptado
const containerBtnEncrip = document.createElement("div");
containerBtnEncrip.setAttribute("id", "container-btn-encrip");
const btnCopiarEncrip = document.createElement("input");
btnCopiarEncrip.setAttribute("id", "btnCopiarEncrip");
btnCopiarEncrip.setAttribute("type", "button");
btnCopiarEncrip.setAttribute("value", "Copiar");
containerBtnEncrip.appendChild(btnCopiarEncrip);
newDiv.appendChild(containerBtnEncrip);

//creamos otro DIV que servira como contenedor para el h3
const containerH3Encrip = document.createElement("div");
containerH3Encrip.setAttribute("id", "container-h3-encrip");
const h3Encriptado = document.createElement("h3"); //creamos el h3
h3Encriptado.innerHTML = "El encriptado fue exitoso!";
containerH3Encrip.appendChild(h3Encriptado);
newDiv.appendChild(containerH3Encrip);

//añadimos la imagen
const containerImgEncrip = document.createElement("div");
containerImgEncrip.setAttribute("id", "container-img-encrip");
const imagen = document.createElement("img");
imagen.src = "./imagenes/silicon1.jpeg";
containerImgEncrip.appendChild(imagen);
newDiv.appendChild(containerImgEncrip);

//DESENCRIPTADO
const newDiv2 = document.createElement("div");
newDiv2.setAttribute("id", "container-desencriptado");

const containerTextDesencrip = document.createElement("div");
containerTextDesencrip.setAttribute("id", "container-textarea-desencrip");
const newTextareaDesencrip = document.createElement("textarea"); //creamos un nuevo <textarea>
containerTextDesencrip.appendChild(newTextareaDesencrip);
newDiv2.appendChild(containerTextDesencrip);

//Boton para copiar el texto Desencriptado
const containerBtnDesencrip = document.createElement("div");
containerBtnDesencrip.setAttribute("id", "container-btn-desencrip");
const btnCopiarDesencrip = document.createElement("input");
btnCopiarDesencrip.setAttribute("id", "btnCopiarDesencrip");
btnCopiarDesencrip.setAttribute("type", "button");
btnCopiarDesencrip.setAttribute("value", "Copiar");
containerBtnDesencrip.appendChild(btnCopiarDesencrip);
newDiv2.appendChild(containerBtnDesencrip);

// H3
const containerH3Desencrip = document.createElement("div");
containerH3Desencrip.setAttribute("id", "container-h3-desencrip");
const h3Desencriptado = document.createElement("h3"); //creamos el h3
h3Desencriptado.innerHTML = "El Desencriptado fue exitoso!";
containerH3Desencrip.appendChild(h3Desencriptado);
newDiv2.appendChild(containerH3Desencrip);

// IMG
const containerImgDesencrip = document.createElement("div");
containerImgDesencrip.setAttribute("id", "container-img-desencrip");
const imagenDesencript = document.createElement("img");
imagenDesencript.src = "./imagenes/startup1.png";
containerImgDesencrip.appendChild(imagenDesencript);
newDiv2.appendChild(containerImgDesencrip);

// EVENTOS AL HACER CLICK EN ENCRIPTADO/DESENCRIPTADO
textarea.addEventListener("input", function () {
  let texto = textarea.value; //extrae el valor del tag <textarea>
  //funcion para encriptar texto
  btnencriptar.addEventListener("click", function () {
    if (texto !== null && texto !== undefined) {
      if (texto.includes("e")) {
        texto = texto.replace(/e/g, "enter");
        newTextareaEncrip.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("i")) {
        texto = texto.replace(/i/g, "imes");
        newTextareaEncrip.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("a")) {
        texto = texto.replace(/a/g, "ai");
        newTextareaEncrip.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("o")) {
        texto = texto.replace(/o/g, "ober");
        newTextareaEncrip.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("u")) {
        texto = texto.replace(/u/g, "ufat");
        newTextareaEncrip.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
    }

    // boton copiar texto de textarea
    document.addEventListener("DOMContentLoaded", () => {
      const textarea = document.getElementById("textareaEncriptado");
      const btnCopiarEncrip = document.getElementById("btnCopiarEncrip");
    
      btnCopiarEncrip.addEventListener("click", () => {
        const texto = textarea.value;
        navigator.clipboard.writeText(texto)
          .then(() => {
            console.log('Texto copiado con éxito');
            // Limpiar el textarea después de copiar
            textarea.value = "";
            alert("Texto copiado al portapapeles");
          })
          .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert("Error al copiar el texto");
          });
      });
    });
    

    //Boton para desencriptar texto
    btndesencriptar.addEventListener("click", function () {
      if (texto !== null && texto !== undefined) {
        if (texto.includes("enter")) {
          texto = texto.replace(/enter/g, "e");
          newTextareaDesencrip.innerHTML = texto;
          containerRight.innerHTML = "";
          containerRight.appendChild(newDiv2);
        }
        if (texto.includes("imes")) {
          texto = texto.replace(/imes/g, "i");
          newTextareaDesencrip.innerHTML = texto;
          containerRight.innerHTML = "";
          containerRight.appendChild(newDiv2);
        }
        if (texto.includes("ai")) {
          texto = texto.replace(/ai/g, "a");
          newTextareaDesencrip.innerHTML = texto;
          containerRight.innerHTML = "";
          containerRight.appendChild(newDiv2);
        }
        if (texto.includes("ober")) {
          texto = texto.replace(/ober/g, "o");
          newTextareaDesencrip.innerHTML = texto;
          containerRight.innerHTML = "";
          containerRight.appendChild(newDiv2);
        }
        if (texto.includes("ufat")) {
          texto = texto.replace(/ufat/g, "u");
          newTextareaDesencrip.innerHTML = texto;
          containerRight.innerHTML = "";
          containerRight.appendChild(newDiv2);
        }
      }
    });
  });
});
