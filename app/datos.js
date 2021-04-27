



window.onload = function () {


    let db = new PouchDB('datos');


    /** Función para pintar la lista de usuarios */
    function renderDatos() {
        let saved = document.querySelector(".item_datosGuardados");
        saved.innerHTML = "<H7> </H7>";


        //Retrieving all the documents in PouchDB
        db.allDocs({ include_docs: true }, function (err, docs) {
            if (err) {
                return console.log(err);
            } else {
                datos = docs.rows;
                // console.log("docs/n");
                console.log(docs)
                datos.forEach(magnitudes => {
                    console.log(magnitudes);
                    let dato = `
                                    <article class="magnitud">
                                    

                                        <div class="itemMagnitud presionG"><p> PRESIÓN</p>   ${magnitudes.doc.presion}</div>
                                    
                                        <div class="itemMagnitud estadoGuardado">${magnitudes.doc.estadoTiempo}</div>
                                        <div class="grupo2G">
                                            <p> TEMP AIRE</p>
                                        
                                            <div class="tempAire">
                                        
                                                <div class="itemMagnitud">Max ${magnitudes.doc.aireMax} C</div>
                                                <div class="itemMagnitud">Min ${magnitudes.doc.aireMin} C</div>
                                            </div>
                                        </div>

                                    </article>`;
                    saved.innerHTML += dato;
                });

            }
        });
    }
    renderDatos();

    function borrarDatos() {


        const basura = document.querySelector('.botonEliminar');
        basura.addEventListener('click', () => {
            let juan = document.querySelector(".item_datosGuardados");


        });
    };
    borrarDatos();

};
    //var db = new PouchDB('my_database');







