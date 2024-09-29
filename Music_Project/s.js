var a=10;
var b=a;
let day=(a) =>{
   if(a==7)return 'Sunday';
   else if(a==1)return 'Monday';
   else if(a==2)return 'Tuesday';
   else if(a==3)return 'Wednesday';
   else if(a==4)return 'Thursday';
   else if(a==5)return 'Friday';
   else return 'Saturday'
}
setInterval(() => {
    let tm=new Date();
    
    let hr=tm.getHours();
    let mn=tm.getMinutes();
    let se=tm.getSeconds();
    cl.innerHTML=`${hr}:${mn}:${se}`;
    yr.innerHTML=tm.getFullYear();
    mo.innerHTML=tm.getMonth();
    dt.innerHTML=tm.getDate();
    dy.innerHTML=day(tm.getDay());
},1000);
console.log(document.querySelectorAll("yrinfo"));

