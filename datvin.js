import * as $ from 'jquery';

let arrayData = [];
$.ajax({
    method: 'GET',
    url: 'https://indonesia-covid-19.mathdro.id/api/provinsi',
    success: function (response) {
        arrayData = response.data
        provinsiTable(arrayData)
        console.log(arrayData)
    }
})

function provinsiTable(data) {
    let table = document.getElementById('provTable')

    for (let i = 0; i < data.length; i++) {
        const row = `
        <tr>
            <td>${data[i].provinsi}</td>
            <td>${data[i].kasusPosi}</td>
            <td>${data[i].kasusSemb}</td>
            <td>${data[i].kasusMeni}</td>
        </tr>
        `
        table.innerHTML += row
    }
}
