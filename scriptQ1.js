var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
  // for(var i=0;i<dataa.length;i++){
    //  if(dataa[i].region=="Asia")
    //console.log(dataa[i].name+" "+dataa[i].region);
   //}
     dataa.filter((ele)=>{
       if(ele.region==="Asia")
       console.log(ele.name+" "+ele.region)
   })
}