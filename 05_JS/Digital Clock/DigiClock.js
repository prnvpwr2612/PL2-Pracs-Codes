const hourel=document.getElementById("hours");
const minutesel=document.getElementById("minutes");
const secondsel=document.getElementById("seconds");
const amel=document.getElementById("AMPM");

function time(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h>12){
        h=h-12;
        ampm="PM";
    }
    hourel.innerText=h;
    amel.innerText=ampm;
    minutesel.innerText=m;
    secondsel.innerText=s;
    setTimeout(()=>{
        time();
    },1000)
}
time();