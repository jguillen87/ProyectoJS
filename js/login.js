let obj=new Usuario();
// validas que exista registro de login
// si esta registrado te envia a la url como parametro
obj.estadoLogin("./listado.html");

let btn=document.getElementById('btn-login');
let url_login="https://sminnova.com/recurso_clase/api/usuario/login"

let formulario_login=document.getElementById('formulario');
let datos_login=new FormData(formulario_login);

btn.addEventListener("click",function(){
	
	if(obj.datosLoginValidar(datos_login)){
		let estadoLogin=obj.loginConusltar(datos_login)
		console.log(estadoLogin);
	}else{

	}


	

})
let btn_limpiar=document.getElementById('btn-limpiar');
btn_limpiar.addEventListener("click",function(){
	
	let elementos=document.getElementsByClassName('inp-form');
	for(let i=0;i<elementos.length;i++){
		elementos[i].value=""
	}

})