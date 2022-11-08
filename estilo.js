//pestaña historia
let video = document.querySelectorAll("video")


const reproducir=()=>{
	console.log("click")
	video[0].play()
}

const pausar=()=>{
console.log("clikeo pause")
video[0].pause()
}


//pestaña juguemos


let zonaDestino = document.querySelector(".contenedorJuego1")



const guardarDato=(evento)=>{
     evento.dataTransfer.setData("Text","./asset/Rompe1.png")
     console.log (evento.dataTransfer.getData("Text"))
    
}

const prevenirAccion=(evento)=>{
	evento.preventDefault();
}

const soltarDato = (evento)=>{
	
	let infoImagen= evento.dataTransfer.getData("Text")
    console.log(infoImagen)
    zonaDestino.innerHTML=`<img src="${infoImagen}"/>`
    evento.dataTransfer.clearData("Text")
    const $rompe1 = document.querySelector(".rompe1");
	$rompe1.style.display = "none";
    
}
 

let zonaDestino1 = document.querySelector(".contenedorJuego3")



const guardarDato1=(evento)=>{
     evento.dataTransfer.setData("Text","./asset/Rompe3.png")
     console.log (evento.dataTransfer.getData("Text"))
}

const prevenirAccion1=(evento)=>{
	evento.preventDefault();
}

const soltarDato1 = (evento)=>{
	
	let infoImagen= evento.dataTransfer.getData("Text")
    console.log(infoImagen)
    zonaDestino1.innerHTML=`<img src="${infoImagen}"/>`
    evento.dataTransfer.clearData("Text")
    const $rompe3 = document.querySelector(".rompe3");
	$rompe3.style.display = "none";
 }


let zonaDestino2 = document.querySelector(".contenedorJuego2")



const guardarDato2=(evento)=>{
     evento.dataTransfer.setData("Text","./asset/Rompe2.png")
     console.log (evento.dataTransfer.getData("Text"))
}

const prevenirAccion2=(evento)=>{
	evento.preventDefault();
}

const soltarDato2 = (evento)=>{
	
	let infoImagen= evento.dataTransfer.getData("Text")
    console.log(infoImagen)
    zonaDestino2.innerHTML=`<img src="${infoImagen}"/>`
    evento.dataTransfer.clearData("Text")
    const $rompe2 = document.querySelector(".rompe2");
	$rompe2.style.display = "none";
	}
	

//boton reiniciar

 let reiniciar=()=>{
 	location.reload();
 }