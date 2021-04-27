window.addEventListener('load', () => {

    //PRESIÓN
    fetch('https://mars-weather-rems.netlify.app/rems.json')
        .then(res => res.json())
        .then(res => {
            let presion1 = document.getElementById("presion1");

            let item = `<li><span>${res.weather_report.magnitudes[0].pressure}Pa</span></li>`;
            presion1.innerHTML += item;
            //console.log(item);

            //minTemp
            let tempAireMin = document.getElementById("tempAireMin");

            let item2 = `${res.weather_report.magnitudes[0].min_temp}º`;
            tempAireMin.innerHTML += item2;
            //console.log(item);

            //maxTemp
            let tempAireMax = document.getElementById("tempAireMax");

            let item3 = `${res.weather_report.magnitudes[0].max_temp}º`;
            tempAireMax.innerHTML += item3;


            //soles
            let numSol = document.getElementById("numSol");

            let item4 = `${res.weather_report.sol}`;
            numSol.innerHTML += item4;
            //console.log(item);


            //temp suelo min
            let tempSueloMin = document.getElementById("tempSueloMin");

            let item5 = `${res.weather_report.magnitudes[0].min_gts_temp}º`;
            tempSueloMin.innerHTML += item5;
            //console.log(item);

            //temp suelo max

            let tempSueloMax = document.getElementById("tempSueloMax");

            let item6 = `${res.weather_report.magnitudes[0].max_gts_temp}º`;
            tempSueloMax.innerHTML += item6;
            //console.log(item);




            //ICONOS DE LOS ESTADOS DEL TIEMPO


            let estadoTiempo = document.getElementById("estadoTiempo");

            let item7 = `<li><span>${res.weather_report.magnitudes[0].atmo_opacity}</span></li>`;
            if (res.weather_report.magnitudes[0].atmo_opacity == "Sunny") {
                let sunny = `<span class="fa fa-sun-o"></span>`;
                estadoTiempo.innerHTML += sunny;

            }
            if (res.weather_report.magnitudes[0].atmo_opacity == "Cloudy") {
                let cloudy = `<span class="fa fa-cloud"></span>`;
                estadoTiempo.innerHTML += cloudy;

            }
            if (res.weather_report.magnitudes[0].atmo_opacity == "Windy") {
                let windy = `<img src="./assets/img/viento.png" alt="">`;
                estadoTiempo.innerHTML += windy;

            };

        });

    /** Crear / conectar bbdd */
    let db = new PouchDB('datos');

    /** Pintar la lista de usuarios 
    renderDatos();*/

    /** Escuechar eventos de los botones */
    let btnAdd = document.querySelector("#fa-plus");
    btnAdd.addEventListener("click", addDatos, false);

    /** Función para añadir usuarios */
    function addDatos() {

        // Añadir registro a la BBDD
        let doc = {
            "_id": `temp-${Math.floor(Math.random() * 10000000)}`,
            "presion": presion1.innerHTML,
            "aireMax": tempAireMax.innerHTML,
            "aireMin": tempAireMin.innerHTML,
            "estadoTiempo": estadoTiempo.innerHTML
        };
        db.put(doc);


    }





});






