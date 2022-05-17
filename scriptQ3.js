var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
   dataa.forEach(element => {
       console.log(element.name+" "+element.capital+" "+element.flag);
       
   });
    

}