var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
    let totalpop=dataa.reduce((sum,popu)=>sum+popu.population,0);
    console.log(totalpop);
}