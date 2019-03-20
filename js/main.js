//(1)definicion de variables
const articulo = document.getElementById("articulo");
const cantidad = document.querySelector("#cantidad");
const prioridad = document.querySelector("#prioridad");
const agregar = document.querySelector("#agregar");
const formulario = document.querySelector("#formulario");
const listacompra = document.querySelector("#listacompra");
let listado = [];

//(2)definicion de funciones
function ComprobarInput() {
  /*console.log(`Input: ${articulo.value} - ${articulo.value.length}`);*/
  if (articulo.value.length === 0) {
    agregar.disabled = true;
  } else {
    agregar.disabled = false;
  }
}
const CrearLista = (art, cant, pri) => {
  let elemento = {
    articulo: art,
    cantidad: cant,
    prioridad: pri,
    id: Math.random()
      .toString()
      .substring(2, 9)
  };
  listado.push(elemento);
  console.log(listado);
};
const MostrarLista = () => {
  listacompra.innerHTML = "";
  if (listado.length === 0) {
    listacompra.innerHTML =
      /*html*/
      `<div class="alert alert-danger">
      <i class="material-icons align-middle">list</i>No hay Artículos que comprar
      </div>`;
    /*"<div class='alert alert-danger'>" +
      "La lista de la compra tiene " +
      listado.length +
      "elementos para comprar" +
      "</div>";*/
  } else {
    for (let i = 0; i < listado.length; i++) {
      listacompra.innerHTML +=
        /*html*/
        `<div class="alert alert-success">
        <i class="material-icons align-middle">list</i>
        ${listado[i].articulo} - ${listado[i].cantidad} - ${
          listado[i].prioridad
        }
        </div>`;
    }
  }
};
const AgregarArticulo = e => {
  e.preventDefault(); /*previene su comportamiento por defecto*/
  CrearLista(articulo.value, cantidad.value, prioridad.value);
  MostrarLista();
  formulario.reset();
  ComprobarInput();
};
const Inicializar = () => {
  ComprobarInput();
  MostrarLista();
};

//(3)definicion de eventos
document.addEventListener("DOMContentLoaded", Inicializar);
articulo.addEventListener("keyup", ComprobarInput);
agregar.addEventListener("click", AgregarArticulo);
