function Encriptar() {
	var texto = document.querySelector(".input-entrada").value;
	var textoCifrado = texto
		.replace(/a/gi, "rzy")
		.replace(/e/gi, "39t")
		.replace(/i/gi, "1z66")
		.replace(/o/gi, "lzm")
		.replace(/u/gi, "m2yw");

	document.querySelector(".input-salida").value = textoCifrado;
}



function Desencriptar() {
	var texto = document.querySelector(".input-entrada").value;
	var textoCifrado = texto
		.replace(/rzy/gi, "a")
		.replace(/39t/gi, "e")
		.replace(/1z66/gi, "i")
		.replace(/lzm/gi, "o")
		.replace(/m2yw/gi, "u");
	document.querySelector(".input-salida").value = textoCifrado;
}


function copiar() {
    let contenido = document.querySelector(" .input-salida");
    contenido.select();
    document.execCommand("copy");
    
}