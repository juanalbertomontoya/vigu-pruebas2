/* Agrande el cursor en el logo */

$("body > header > div > div > div.menu-principal-logo").hover(function () {
  $(".cursor").toggleClass("cursor-hover");
});

/* Agrande el cursor en el menu */

$("ul > li").hover(function () {
  $(".cursor").toggleClass("cursor-hover");
});

/* Agranda el cursor en atrae cautiva y capta */

$("#servicios-scroll > div > div > div.atrae > div > div > div > h1").hover(function () {
  $(".cursor").toggleClass("cursor-hover");
});


/* Agranda el cursor en las imagenes de la esfera */

$("img").hover(function () {
  $(".cursor").toggleClass("cursor-hover");
});


/* Agrnada el cursor en el correo */


$("a").hover(function () {
  $(".cursor").toggleClass("cursor-hover");
});
