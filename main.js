function carregarMapa(){
    obterLocalizacao();
}

function obterLocalizacao(){
    if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(obterPosicao);
}  //else{
   // alert('Não foi possível obter a localização');} 

function obterPosicao(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    callMapQuest(latitude, longitude);
}

function callMapQuest(latitude, longitude){
    var url ="https://www.mapquestapi.com/staticmap/v5/map?"+
    "key=b3DCa0NsDXfYNgGUYNnxwaepydnakcKS&"+
    "center="+latitude+","+longitude+
    "&size=670,400@2x"

    var imagem = document.createElement("img");
    imagem.src = url;
    document.getElementById("divMapa").appendChild(imagem);
}