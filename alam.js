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
        document.querySelector("#aud").pause() 
        clearInterval(inter)
     },10000)
    }
    else{
        show.innerHTML="alaram set"
    }
        
    }, 1000);
   

}