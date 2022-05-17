var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
   /* dataa.filter(function(pop){
        if(pop.population<=200000)
        console.log(pop.name+" "+pop.population);
    })
    

}*/
const popu=dataa.filter((element)=>{
    return element.population<200000;
})
console.log(popu);
}