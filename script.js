var getSeoulTime = function(){
    document.getElementById("seoulTime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Asia/Seoul', timeStyle:'short', hourCycle:'h24'});
}
getSeoulTime();
setInterval(getSeoulTime,1000);