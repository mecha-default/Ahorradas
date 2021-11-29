//const botonNuevaOperacion = document.getElementById("tarjeta-nueva-operacion");

const botonLinkCategorias=document.getElementById("boton-link-categorias")
const tarjetaReportes=document.getElementById("tarjeta-reportes")
const tarjetaBalance=document.getElementById("home-ahorradas")
const tarjetaNuevaOperacion=document.getElementById("tarjeta-nueva-operacion")
const tarjetaCategorias=document.getElementById("tarjeta-categorias")



botonLinkCategorias.onclick = (event) => {
    event.preventDefault();
    tarjetaCategorias.classList.remove("is-hidden")
    tarjetaNuevaOperacion.classList.add("is-hidden")
    tarjetaReportes.classList.add("is-hidden")
    tarjetaBalance.classList.add("is-hidden")
}
