var cuartaLima = document.getElementsByClassName("cuartaPromocion");
var quintaLima = document.getElementsByClassName("quintaPromocion");
var sextaLima = document.getElementsByClassName("sextaPromocion");
var select = document.getElementById("select");

select.onchange = function(){
  if(select.value == "cuartaPromocion"){
   quintaLima[0].style.display = "none";
   sextaLima[0].style.display = "none";
   cuartaLima[0].style.display = "block";
  }
  if(select.value == "quintaPromocion"){
   cuartaLima[0].style.display = "none";
   sextaLima[0].style.display = "none";
   quintaLima[0].style.display = "block";
  }
  if(select.value == "sextaPromocion"){
   cuartaLima[0].style.display = "none";
   quintaLima[0].style.display = "none";
   sextaLima[0].style.display = "block";
  }
}
