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
const divIntEncriptado = document.createElement("div");
divIntEncriptado.setAttribute("id", "container-textarea");

//creamos un elemento <textarea> que contendra el texto encriptado/desencriptado
const newTextarea = document.createElement("textarea"); //creamos un nuevo <textarea>
divIntEncriptado.appendChild(newTextarea);
newDiv.appendChild(divIntEncriptado);

//creamos otro DIV que servira como contenedor para la imagen y el h3
const divIntEncriptado2 = document.createElement("div");
divIntEncriptado2.setAttribute("id", "container-h3-img");

//añadimos el h3
const h3Encriptado = document.createElement("h3");
h3Encriptado.innerHTML = "El encriptado fue exitoso!";
divIntEncriptado2.appendChild(h3Encriptado);

//añadimos la imagen
const imagen = document.createElement("img");
imagen.src = "./imagenes/silicon1.jpeg";
divIntEncriptado2.appendChild(imagen);

//añadimos un boton que servira para copiar el texto
const btnCopiar = document.createElement("input");
btnCopiar.setAttribute("id", "btnCopiar");
btnCopiar.setAttribute("type", "button");
btnCopiar.setAttribute("value", "copiar");
divIntEncriptado2.appendChild(btnCopiar);

newDiv.appendChild(divIntEncriptado2);

//DESENCRIPTADO
const newDiv2 = document.createElement("div");
newDiv2.setAttribute("id", "container-desencriptado");

const newTextarea2 = document.createElement("textarea");
newTextarea2.setAttribute("id", "textarea");
newDiv2.appendChild(newTextarea2);

const divIntDesencriptado = document.createElement("div");
divIntDesencriptado.setAttribute("id", "subcontainer-h3-img");
newDiv2.appendChild(divIntDesencriptado);

const h3Desencriptado = document.createElement("h3");
h3Desencriptado.innerHTML = "El texto fue desencriptado con éxito!";
divIntDesencriptado.appendChild(h3Desencriptado);

const imgDesencriptado = document.createElement("img");
imgDesencriptado.src = "./imagenes/startup1.png";
divIntDesencriptado.appendChild(imgDesencriptado);

//BOTON PARA COPIAR TEXTO ENCRIPTADO
const btnCopiarDesencrip = document.createElement("input");
// btnCopiarDesencrip.setAttribute("id", "btnCopiar");
btnCopiarDesencrip.setAttribute("type", "button");
btnCopiarDesencrip.setAttribute("value", "copiar");
divIntDesencriptado.appendChild(btnCopiarDesencrip);

btnCopiarDesencrip.addEventListener("click", function () {
  let textoCopiado = document.getElementById("textarea").value;
  navigator.clipboard.writeText(textoCopiado) // Utilizando el API del portapapeles moderno
    .then(() => {
      console.log("Texto copiado exitosamente");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
});

//Al activarse el evento 'input' se ejecutara la funcion que hara el encriptado/desencriptado de texto y lo mostrara en otra pantalla
textarea.addEventListener("input", function () {
  // let texto = this.value; //this hace referencia al tag <textarea>
  let texto = textarea.value; //extrae el valor del tag <textarea>
  //funcion para encriptar texto
  btnencriptar.addEventListener("click", function () {
    if (texto !== null || texto !== undefined) {
      if (texto.includes("e")) {
        texto = texto.replace(/e/g, "enter");
        newTextarea.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("i")) {
        texto = texto.replace(/i/g, "imes");
        newTextarea.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("a")) {
        texto = texto.replace(/a/g, "ai");
        newTextarea.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("o")) {
        texto = texto.replace(/o/g, "ober");
        newTextarea.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
      if (texto.includes("u")) {
        texto = texto.replace(/u/g, "ufat");
        newTextarea.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv);
      }
    }
  });

  //Boton para desencriptar texto
  btndesencriptar.addEventListener("click", function () {
    if (texto !== null || texto !== undefined) {
      if (texto.includes("enter")) {
        texto = texto.replace(/enter/g, "e");
        newTextarea2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("imes")) {
        texto = texto.replace(/imes/g, "i");
        newTextarea2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ai")) {
        texto = texto.replace(/ai/g, "a");
        newTextarea2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ober")) {
        texto = texto.replace(/ober/g, "o");
        newTextarea2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ufat")) {
        texto = texto.replace(/ufat/g, "u");
        newTextarea2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
    }
  });
});
