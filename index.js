let second=0;
let minute=0;
let hour=0;

let d;;
let s=1;
let s1;

let second1=0,minute1=0,hour1=0;



function provide()
{
   
    return s;
}


function update(){
    

    selectElement = document.querySelector('#language');
    output = selectElement.value;
    setInterval(
        function(){
           
    let se= new Date();
    utc = se.getTime() + (se.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*output));
    
    s=nd;
},1000);
}

function update1(){
    window.location = "index.html";
    }

setInterval(
    function abc(da){
        d= provide();
        if(d==1)
        d=new Date();

        second1=d.getSeconds();
        minute1=d.getMinutes();
        hour1=d.getHours();
        if(hour1>12){
            hour1=hour1-12;
            s1="PM";
        }
        else{
            s1="AM";
        }
        document.getElementById("hour").innerText=hour1;
        document.getElementById("minute").innerText=minute1;

        document.getElementById("seconds").innerText=second1;
        document.getElementById("session").innerText=s1;
   
        
       
        second=d.getSeconds()*6;
        minute=d.getMinutes()*6;
        hour=(d.getHours()*30)+(minute/12);
        document.getElementById("three").style.transform="rotate("+second+"deg)";
        document.getElementById("two").style.transform="rotate("+hour+"deg)";
        document.getElementById("one").style.transform="rotate("+minute+"deg)";

    },1000
);

