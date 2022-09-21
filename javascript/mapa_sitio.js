window.addEventListener('load', function() {

    let selector = document.getElementById('orientacion');
    selector.addEventListener("change", cambio_orientacion);

});


function cambio_orientacion() {

    let selector = document.getElementById('orientacion');
    let mapa = document.getElementById('mapa');
    console.log(selector.value);
    switch (selector.value) {
        case "Horizontal":
            mapa.src = "images/mapa_sitio_ho.svg";
        break;
        case "Vertical":
            mapa.src = "images/mapa_sitio_ver.svg";
        break;
    }


}



