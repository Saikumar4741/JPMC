function time()
{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    document.getElementById("one").textContent=`${h}:${m}:${s}`
}
setInterval(time,1000);