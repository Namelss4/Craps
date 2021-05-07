var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_tiro;
var turno = 1;
var total_tiro2;
var punto;
var ganar,perder,id_ganar;

window.onload = init;

function init(){
	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);
	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	cerrar.addEventListener("click",cerrarVentana);
	ganar = new Howl({​​​​​src: ["./sound/yay.mp3"]}​​​​​);
	perder = new Howl({​​​​​src: ["./sound/bruh.mp3"]}​​​​​);
}

function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
}

function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	tiro_2 = tirardado();
	actualizarDado(dado1,tiro_1);
	actualizarDado(dado2,tiro_2);

	console.log("turno actual",turno);
	total_tiro = tiro_1 + tiro_2;

	turno = turno + 1;

	if (turno == 2)
	{
		if(total_tiro==7 || total_tiro==11)
	{
		mostrarMensaje("Ganó la partida");
		ganar.play();
		turno = 1;
		console.log("Se reinicio el turno");
	}

	if(total_tiro==2|| total_tiro==3|| total_tiro==12)
	{
		mostrarMensaje("Perdió la partida");
		perder.play();
		turno = 1;
		console.log("Se reinicio el turno");
		audioLost.play();
	}

	if (total_tiro==4 || total_tiro==5 || total_tiro==6 || total_tiro==8 || total_tiro==9 || total_tiro==10)
	{
		punto = total_tiro
	}

}

	
	if (turno > 2)
	{
		tiro_1 = tirardado();//Retorna un numero entre 1 y 6
		tiro_2 = tirardado();
		actualizarDado(dado1,tiro_1);
		actualizarDado(dado2,tiro_2);

		console.log("turno actual",turno);
		total_tiro2 = tiro_1 + tiro_2;

		if (total_tiro2==7)
		{
			mostrarMensaje("Perdió la partida");
			perder.play();
			turno = 1;
			console.log("Se reinicio el turno");
		}
		
	if (total_tiro2==punto)
	{
		mostrarMensaje("Ganó la partida");
		ganar.play();
		turno = 1;
		console.log("Se reinicio el turno");
	}


}

function mostrarMensaje(mensaje){
	mensaje_texto.innerHTML = mensaje;
	abrirVentana();
}



function abrirVentana(){
	ventana.className = "ligthbox animate__animated animate__fadeIn";
}



function cerrarVentana(){
	ventana.className = "ligthbox hidden";
	}
}
