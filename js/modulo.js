/**
 * Created by Rene on 28/05/2017.
 */

// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference
function insertRow(rowData) {
    var image = document.createElement("img");

    image.src = rowData.score > 1600 ? "images/happy.png" : "images/unhappy.png";
    
    var table = document.getElementById("resultados");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell2.appendChild(document.createTextNode(rowData.id));
    cell3.appendChild(document.createTextNode(rowData.fullname));
    cell4.appendChild(document.createTextNode(rowData.score));
    cell5.appendChild(image);
}

function listener () {
    var data = JSON.parse(this.responseText);

    for(var i = 0; i < data.length; i++) {
        var rd = {
            id: data[i].document,
            fullname: data[i].fullname,
            score: data[i].score
        };

        insertRow(rd);
    }
}



function cargaContenido() {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", listener);

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        console.log(xhr.status);
    };

    //xhr.open('GET', 'http://localhost/boot/data/estudiantes.json');
    xhr.open('GET', 'https://raw.githubusercontent.com/ReneLeonidas/boot/master/data/estudiantes.json');
    // xhr.responseType = 'json';

    xhr.send();
}


window.onload = cargaContenido;
