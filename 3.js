let counter =30;
function startCountdown(){
    const interval = setInterval(()=>{
        console.log(counter);
        counter--;
        if(counter <0){
            clearInterval(interval);
            console,log("Countdown complete!");
        }
    },1000);
}
