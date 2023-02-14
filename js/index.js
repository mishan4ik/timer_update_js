let text = document.getElementById("dayText");
let text1 = document.getElementById("dayText2");
let setTimebtn = document.getElementById("setbtn");
let setTimeinp = document.getElementById("setTime");



let save;
let timer =setTimeinp;


setTimebtn.onclick = () => {

    
    timer = setTimeinp.value;
    console.log(timer)
    

}


let timeStop = setInterval(func,1000);

function func()  {

    if(timer == 0){
        clearInterval(timeStop)
    }

    let minute = Math.floor(timer/60)
    let seconds = timer %  60;
    seconds = seconds < 10 ? "0" + seconds: seconds
    text.innerHTML = `${seconds}`;
    text1.innerHTML = `${minute}`;
    timer--
    

}

