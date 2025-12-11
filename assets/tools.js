var txt = document.querySelector("#txt-js");
var menu = document.querySelector("#menu");
var hab = document.querySelector("#hab");
var servicios = document.querySelector("#servicios");
menu.addEventListener("click", function(event){
    event.preventDefault();
    txt.innerHTML = "<h2>Menú Restaurante</h2><p>Desayuno: 7:00 AM - 10:00 AM<br>Almuerzo: 12:00 PM - 3:00 PM<br>Cena: 6:00 PM - 10:00 PM</p><h6>Platos Destacados</h6><ul><li>Paella de Mariscos</li><li>Filete a la Parrilla</li><li>Ensalada César</li></ul>";
});
hab.addEventListener("click", function(event){
    event.preventDefault();
    txt.innerHTML = "<h2>Habitaciones</h2><p>Ofrecemos una variedad de habitaciones para satisfacer tus necesidades:</p><ul><li>Habitación Individual</li><li>Habitación Doble</li><li>Suite Familiar</li></ul><h6>Servicios Incluidos</h6><ul><li>Wi-Fi Gratis</li><li>Desayuno Incluido</li><li>Limpieza Diaria</li></ul>";
});
servicios.addEventListener("click", function(event){
    event.preventDefault();
    txt.innerHTML = "<h2>Servicios</h2><p>En Hotel Las Gaviotas, ofrecemos una amplia gama de servicios para garantizar una estancia cómoda y agradable:</p><ul><li>Piscina al aire libre</li><li>Spa y centro de bienestar</li><li>Gimnasio totalmente equipado</li><li>Servicio de habitaciones 24 horas</li><li>Transporte al aeropuerto</li></ul>";
});