import * as $ from 'jquery';
const globalUrl = "https://covid19.mathdro.id/api";
$.get(globalUrl, function (gdata) {
    $("#globalinfection").text(gdata.confirmed.value);
    $("#globalrecovery").text(gdata.recovered.value);
    $("#globaldeath").text(gdata.deaths.value);
    $("#globallastupdate").text(gdata.lastUpdate);
});

const indolUrl = "https://covid19.mathdro.id/api/countries/indonesia";
$.get(indolUrl, function (idata) {
    $("#indoinfection").text(idata.confirmed.value);
    $("#indorecovery").text(idata.recovered.value);
    $("#indodeath").text(idata.deaths.value);
    $("#indolastupdate").text(idata.lastUpdate);
});
