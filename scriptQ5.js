var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
    console.log(dataa)
   /*dataa.filter(function(ele){
       if(ele.currencies.name=="United State Dollar")
        console.log(ele.name)*/
        var cur=[];
        for(i=0;i<dataa.length;i++){
            if(dataa[i].currencies[0].code==="USD")
            {
                console.log("name:",dataa[i].name,"==>",dataa[i].currencies[0].code)
            }
        }
    }