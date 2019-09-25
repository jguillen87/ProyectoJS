

let btn=document.getElementById('btn-registrar');

btn.addEventListener("click",function(){
	//let nombres=document.getElementById('inp-nombres').value;
	let formulario=document.getElementById('datos-registro')
	let datosFormulario=new FormData(formulario);

	let registro="https://sminnova.com/recurso_clase/api/usuarios/agregar";

	let xhr=new XMLHttpRequest();
	xhr.open("POST",registro);
	xhr.send(datosFormulario);

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				console.log(xhr.response);
				window.location="index.html";
			}
		}
	}
	//datosFormulario.append("hora",now());


	//datosFormulario.append("nombre","JC")

})

let btn_limpiar=document.getElementById('btn-limpiar');
btn_limpiar.addEventListener("click",function(){
	
	let elementos=document.getElementsByClassName('inp-form');
	for(let i=0;i<elementos.length;i++){
		elementos[i].value=""
	}

})
