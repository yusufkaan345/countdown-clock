const countdown=()=>{
    const aimdate=new Date("March 11,2023 18:45:00").getTime();
    const nowdate=new Date().getTime();
    const finaltime=aimdate-nowdate;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const gapday=Math.floor(finaltime/day);
    const gaphour=Math.floor((finaltime%day)/hour);
    const gapminute=Math.floor((finaltime%hour)/minute);
    const gapsecond=Math.floor((finaltime%minute)/second);

    document.querySelector(".day").innerText=gapday;
    document.querySelector(".hour").innerText=gaphour;
    document.querySelector(".minute").innerText=gapminute;
    document.querySelector(".second").innerText=gapsecond;
}
setInterval(countdown,1000);
