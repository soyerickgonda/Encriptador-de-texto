//EXTRAEMOS ALGUNOS ELEMENTOS DEL DOM PARA SU MANIPULACION
const textarea = document.getElementById("mitextarea"); //<textarea id="mitextarea">
const btnencriptar = document.getElementById("encriptar");
const btndesencriptar = document.getElementById("desencriptar");

//EXTRAEMOS el conatiner-right para luego reemplazar su contenido con todo lo creado para los botones (encriptado/desencriptado)
const containerLeft = document.getElementById('container-left');
const containerRight = document.getElementById("container-right");

//BOTON COPIAR TEXTO ENCRIPTADO
const containerBtn = document.createElement("div"); //contenedor del boton encriptado
containerBtn.setAttribute("class", "container-btn");
const btnCopiar = document.createElement("input"); //se crea el boton
btnCopiar.setAttribute("class", "btnCopiar");
btnCopiar.setAttribute("type", "button");
btnCopiar.setAttribute("value", "Copiar");
containerBtn.appendChild(btnCopiar);

//BOTON COPIAR TEXTO DESENCRIPTADO
const containerBtn2 = document.createElement("div"); //contenedor del boton encriptado
containerBtn2.setAttribute("class", "container-btn");
const btnCopiar2 = document.createElement("input"); //se crea el boton
btnCopiar2.setAttribute("class", "btnCopiar");
btnCopiar2.setAttribute("type", "button");
btnCopiar2.setAttribute("value", "Copiar");
containerBtn2.appendChild(btnCopiar2);


//ENCRIPTADO
const newDiv = document.createElement("div"); //Contenedor Encriptado
newDiv.setAttribute("id", "container-encriptado");
const containerTextEncrip = document.createElement("div"); //contenedor para el tag <textarea>
containerTextEncrip.setAttribute("id", "container-textarea-encrip");
const newTextareaEncrip = document.createElement("textarea"); //se crea <textarea> para el encriptado
newTextareaEncrip.setAttribute("id", "textareaEncriptado");
containerTextEncrip.appendChild(newTextareaEncrip);
newDiv.appendChild(containerTextEncrip);

// Añadimos el Boton para copiar el texto desencriptado
newDiv.appendChild(containerBtn);

const containerH3Encrip = document.createElement("div"); //contenedor para el h3 del encriptado
containerH3Encrip.setAttribute("id", "container-h3-encrip");
const h3Encriptado = document.createElement("h3"); //creamos el h3
h3Encriptado.innerHTML = "El encriptado fue exitoso!";
containerH3Encrip.appendChild(h3Encriptado);
newDiv.appendChild(containerH3Encrip);

//añadimos la imagen
const containerImgEncrip = document.createElement("div"); //contenedor para el img del encriptado
containerImgEncrip.setAttribute("id", "container-img-encrip");
const imagen = document.createElement("img"); //se crea el img
imagen.src = "./imagenes/silicon1.jpeg";
containerImgEncrip.appendChild(imagen);
newDiv.appendChild(containerImgEncrip);


//DESENCRIPTADO
const newDiv2 = document.createElement("div"); //contenedor Desencriptado
newDiv2.setAttribute("id", "container-desencriptado");
const containerTextDesencrip = document.createElement("div"); //contenedor para textarea desencriptado
containerTextDesencrip.setAttribute("id", "container-textarea-desencrip");
const newTextareaDesencrip = document.createElement("textarea"); //se crea <textarea> para el desencriptado
newTextareaDesencrip.setAttribute("id", "textareaDesencriptado");
containerTextDesencrip.appendChild(newTextareaDesencrip);
newDiv2.appendChild(containerTextDesencrip);

// Añadimos el Boton para copiar el texto desencriptado
// newDiv2.appendChild(containerBtn.cloneNode(true));
newDiv2.appendChild(containerBtn2);

// H3
const containerH3Desencrip = document.createElement("div"); //contenedor h3 desencriptado
containerH3Desencrip.setAttribute("id", "container-h3-desencrip");
const h3Desencriptado = document.createElement("h3"); //creamos el h3
h3Desencriptado.innerHTML = "El Desencriptado fue exitoso!";
containerH3Desencrip.appendChild(h3Desencriptado);
newDiv2.appendChild(containerH3Desencrip);

// IMG
const containerImgDesencrip = document.createElement("div"); //contenedor img desencriptado
containerImgDesencrip.setAttribute("id", "container-img-desencrip");
const imagenDesencript = document.createElement("img"); //se crea img
imagenDesencript.src = "./imagenes/startup1.png";
containerImgDesencrip.appendChild(imagenDesencript);
newDiv2.appendChild(containerImgDesencrip);


//ELEMENTO DEL MODAL
// const modal = document.getElementById("container-cards");
const cardEncriptado = document.getElementById('container-card-encriptado');
const textoModalEncriptado = document.getElementById("textoEncrip");
const cardDesencriptado = document.getElementById('container-card-desencriptado');
const textoModalDesencriptado = document.getElementById('textoDesencrip');
const closeModalEncrip = document.getElementById("closeEncrip");
const closeModalDesencrip = document.getElementById("closeDesencrip");


//Primero: crear una funcion que encripte y una funcion que desencripte

// FUNCION ENCRIPTAR
function encriptarTexto(texto) {
  //   let textArea = textarea.value;
  const vocales = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  for (letra in vocales) {
    if (texto.includes(letra)) {
      texto = texto.replace(new RegExp(letra, "g"), vocales[letra]);
    }
  }
  return texto;
}

// FUNCION DESENCRIPTAR
function desencriptarTexto(texto) {
  //   let textArea = textarea.value;

  let palabras = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  for (palabra in palabras) {
    if (texto.includes(palabra)) {
      texto = texto.replace(new RegExp(palabra, "g"), palabras[palabra]);
    }
  }
  return texto;
}

// Funcion que valida el texto ingresado a textarea (tanto en el encriptado/desencriptado)
function validarTexto(texto) {
  const regex = /^[a-z\s¡!¿?\-]*[aeiou]+[a-z\s¡!¿?\-]*$/; // Expresión regular para letras y espacios
  return regex.test(texto);
}

// Evento para el Boton Encriptar
btnencriptar.addEventListener("click", function () {
  const texto = textarea.value;

  if (!validarTexto(texto)) {
    alert(`El texto ingresado contiene caracteres NO válidos.  \n 
    Recuerda NO ingresar: 
    - vocales o letras en mayusculas
    - letras o palabras con tildes
    - letras del alfabeto que No incluyan alguna de las vocales (ejm: pa, ma, etc)
    - simbolos o numeros`);
    return;
  }
  
  const textoEncriptado = encriptarTexto(texto);
  newTextareaEncrip.value = textoEncriptado;
  textarea.value = ""; // Vaciar el textarea original

  containerRight.innerHTML = "";
  containerRight.appendChild(newDiv);

  if(window.innerWidth < 600){
    cardEncriptado.style.display = 'block'; //esto mostrara el modal creado en html para pantallas < a 600px
    const textoEncriptado = encriptarTexto(texto);
    textoModalEncriptado.value = textoEncriptado;
    textarea.value = '';

    containerRight.style.display = 'none';
    containerLeft.style.display = 'none';
  } 
});

closeModalEncrip.addEventListener("click", function () {
  cardEncriptado.style.display = 'none';
  containerLeft.style.display = 'block';
})

// Evento para el Boton Desencriptar
btndesencriptar.addEventListener("click", function () {
  const texto = textarea.value;

  if (!validarTexto(texto)) {
    alert(`El texto ingresado contiene caracteres NO válidos.  \n 
    Recuerda NO ingresar: 
    - vocales o letras en mayusculas
    - letras o palabras con tildes
    - letras del alfabeto que No incluyan alguna de las vocales (ejm: pa, ma, etc)
    - simbolos o numeros`);
    return;
  }

  const textoDesencriptado = desencriptarTexto(texto);
  newTextareaDesencrip.value = textoDesencriptado;
  textarea.value = ""; // Vaciar el textarea original

  containerRight.innerHTML = "";
  containerRight.appendChild(newDiv2);

  if(window.innerWidth < 600){
    cardDesencriptado.style.display = 'block'; //esto mostrara el modal creado en html para pantallas < a 600px
    const textoDesencriptado = desencriptarTexto(texto);
    textoModalDesencriptado.value = textoDesencriptado;
    textarea.value = "";

    containerRight.style.display = 'none';
    containerLeft.style.display = 'none';
  } 
});

closeModalDesencrip.addEventListener('click',function () {
  cardDesencriptado.style.display = 'none';
  containerLeft.style.display = 'block';
})

// Evento del Btn Copiar
btnCopiar.addEventListener("click", function () {
  let copyText = document.getElementById("textareaEncriptado");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert('Texto copiado con exito');
});

btnCopiar2.addEventListener("click", function () {
  let copyText2 = document.getElementById("textareaDesencriptado");

  // Select the text field
  copyText2.select();
  copyText2.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText2.value);

  // Alert the copied text
  alert('Texto copiado con exito');
});

// btnCopiar2.addEventListener('click', function () {
//   console.log('hizo click en el btnCopiar2');
// })