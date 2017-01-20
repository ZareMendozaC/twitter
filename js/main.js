var num=0;
function agregar()
{
   var check= document.getElementById("check");
   var icono= document.getElementById("icono");
   var text= document.getElementById("text").value;
   var cadena_check='';
   var cadena_icono='';
   if(text=='')
   {
    alert("LLena el area de texto");
   }
   else{
    cadena_check= '<li class="animated bounceIn"><label><input type="checkbox" value=""> '+text+'</label><i class="fa fa-trash-o pull-right" aria-hidden="true"></i></li>';
    check.innerHTML+= cadena_check;
    document.getElementById("text").value='';
    var item=document.getElementsByTagName("li");
    item[num].addEventListener('click',onItemClick);
    }
    num= num+1;
}

function onItemClick(evt){
  console.log(evt.target);
  evt.target.parentNode.removeChild(evt.target);
}