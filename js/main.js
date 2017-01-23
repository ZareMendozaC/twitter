
var boton = document.getElementById('boton');
var input = document.getElementById('text');
var lista = document.getElementById('lista');

boton.addEventListener('click', onButtonClick);

function onButtonClick(evt)
{
  agregarMensaje();
}

function agregarMensaje()
{
  //var cadena= '<label><input type="checkbox" value=""> '+text+'</label><i class="fa fa-trash-o pull-right" aria-hidden="true"></i>';
  var item = document.createElement('li');
  var label = document.createElement('label');
  var opcion = document.createElement('input');
  var icono = document.createElement('i');
  icono.className= "fa fa-trash-o pull-right";
  opcion.type= "checkbox";

  label.innerHTML = input.value;
  if(input.value=='')
    {
      alert("Ingrese una tarea en la caja de texto!");
    }else{
  item.className= "animated bounceIn";
  item.appendChild(opcion);
  item.appendChild(label);
  item.appendChild(icono);
  lista.appendChild(item);

  input.value = '';
  input.focus();

  icono.addEventListener('click', onItemClick);
  opcion.addEventListener('click',onOptionClick);
  }
}
function onItemClick(evt)
{
  evt.target.parentNode.className= "animated bounceOut";
  //evt.target.parentNode.className= "animated zoomOutDown"; 
  setTimeout(function(){
    lista.removeChild(evt.target.parentNode);    
  }, 1000);
}
function onOptionClick(evt)
{
  if(evt.target.checked)
  {
  var padre = evt.target.parentNode.parentNode;
 
  evt.target.nextSibling.className= "animated shake tachado";
 }
 else{
  evt.target.nextSibling.className= "";
  }
}