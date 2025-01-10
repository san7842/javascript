let alaram=()=>{
    let show=document.querySelector("#display")
    let inp=document.querySelector("#inp").value ;

   let inter= setInterval(() => {
         let time=new Date()
    let alaramtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
    if(alaramtime==inp){
     show.innerHTML="Alaram is ringing"
     document.querySelector("#aud").play() 

     setTimeout(()=>{
        document.querySelector("#aud").pause() ;
        clearInterval(inter)
     },7000)
    }
    else{
        show.innerHTML="alaram set"
    }
        
    }, 1000);
   

}
// const startButton = document.getElementById('startAlarm');
//  const stopButton = document.getElementById('stopAlarm'); 
//  const clockFace = document.querySelector('.clock-face'); 
//  startButton.addEventListener('click', function() { alert('Alarm started for 10:00 AM');
//      clockFace.classList.add('alarm-ring'); });
//       stopButton.addEventListener('click', function() { alert('Alarm stopped'); 
//         clockFace.classList.remove('alarm-ring');
//      });