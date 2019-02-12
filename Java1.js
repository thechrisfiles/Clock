/* Función que hace funcionar el reloj */
setInterval(function movida() {
    let fecha = new Date();
    let reloj = fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getSeconds(); 
    $('#elem1').html(reloj);
}, 1000);
