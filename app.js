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
containerTextEncrip.setAttribute("id", "container-textareaEncrip");
const newTextareaEncrip = document.createElement("textarea"); //creamos un nuevo <textarea>
containerTextEncrip.appendChild(newTextareaEncrip);
newDiv.appendChild(containerTextEncrip);

//creamos otro DIV que servira como contenedor para el h3
const containerH3Encrip = document.createElement("div");
containerH3Encrip.setAttribute("id", "container-h3");
const h3Encriptado = document.createElement("h3"); //creamos el h3
h3Encriptado.innerHTML = "El encriptado fue exitoso!";
containerH3Encrip.appendChild(h3Encriptado);
newDiv.appendChild(containerH3Encrip);

//añadimos la imagen
const containerImgEncrip = document.createElement('div');
containerImgEncrip.setAttribute('id','container-img')
const imagen = document.createElement("img");
imagen.src = "./imagenes/silicon1.jpeg";
containerImgEncrip.appendChild(imagen);
newDiv.appendChild(containerImgEncrip);

//añadimos un boton que servira para copiar el texto
// const btnCopiar = document.createElement("input");
// btnCopiar.setAttribute("id", "btnCopiar");
// btnCopiar.setAttribute("type", "button");
// btnCopiar.setAttribute("value", "copiar");
// newDiv.appendChild(divIntEncriptado2);

//DESENCRIPTADO
const newDiv2 = document.createElement("div");
newDiv2.setAttribute("id", "container-desencriptado");

const containerTextDesencrip = document.createElement("div");
containerTextDesencrip.setAttribute("id", "container-textareaDesencrip");
const newTextareaDesencrip = document.createElement("textarea"); //creamos un nuevo <textarea>
containerTextDesencrip.appendChild(newTextareaDesencrip);
newDiv2.appendChild(containerTextDesencrip);

// H3
const containerH3Desencrip = document.createElement("div");
containerH3Desencrip.setAttribute("id", "container-h3Desencrip");
const h3Desencriptado = document.createElement("h3"); //creamos el h3
h3Desencriptado.innerHTML = "El Desencriptado fue exitoso!";
containerH3Desencrip.appendChild(h3Desencriptado);
newDiv2.appendChild(containerH3Desencrip);

// IMG
const containerImgDesencrip = document.createElement("div");
containerImgDesencrip.setAttribute('id','container-img-desencript');
const imagenDesencript = document.createElement('img');
imagenDesencript.src = "./imagenes/startup1.png";
containerImgDesencrip.appendChild(imagenDesencript);
newDiv2.appendChild(containerImgDesencrip);

//BOTON PARA COPIAR TEXTO ENCRIPTADO
// const btnCopiarDesencrip = document.createElement("input");
// // btnCopiarDesencrip.setAttribute("id", "btnCopiar");
// btnCopiarDesencrip.setAttribute("type", "button");
// btnCopiarDesencrip.setAttribute("value", "copiar");
// divIntDesencriptado.appendChild(btnCopiarDesencrip);

// btnCopiarDesencrip.addEventListener("click", function () {
//   let textoCopiado = document.getElementById("textarea").value;
//   navigator.clipboard.writeText(textoCopiado) // Utilizando el API del portapapeles moderno
//     .then(() => {
//       console.log("Texto copiado exitosamente");
//     })
//     .catch((err) => {
//       console.error("Error al copiar el texto: ", err);
//     });
// });

//Al activarse el evento 'input' se ejecutara la funcion que hara el encriptado/desencriptado de texto y lo mostrara en otra pantalla
textarea.addEventListener("input", function () {
  // let texto = this.value; //this hace referencia al tag <textarea>
  let texto = textarea.value; //extrae el valor del tag <textarea>
  //funcion para encriptar texto
  btnencriptar.addEventListener("click", function () {
    if (texto !== null || texto !== undefined) {
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
  });

  //Boton para desencriptar texto
  btndesencriptar.addEventListener("click", function () {
    if (texto !== null || texto !== undefined) {
      if (texto.includes("enter")) {
        texto = texto.replace(/enter/g, "e");
        newTextareaEncrip2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("imes")) {
        texto = texto.replace(/imes/g, "i");
        newTextareaEncrip2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ai")) {
        texto = texto.replace(/ai/g, "a");
        newTextareaEncrip2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ober")) {
        texto = texto.replace(/ober/g, "o");
        newTextareaEncrip2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
      if (texto.includes("ufat")) {
        texto = texto.replace(/ufat/g, "u");
        newTextareaEncrip2.innerHTML = texto;
        containerRight.innerHTML = "";
        containerRight.appendChild(newDiv2);
      }
    }
  });
});
