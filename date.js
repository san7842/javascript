// let date=new Date()
// console.log(date.toLocaleString());
// let ans1=date.getFullYear()
// let ans2=date.getMonth()
// let ans3=date.getDay()
// let ans4=date.getHours()
// let ans5=date.getMinutes()
// let ans6=date.getMilliseconds()
// console.log(ans3);
// console.log(ans4);
// console.log(ans5);
// console.log(ans6);
// let date=()=>{
//     // let show=document.querySelector("#dis")
//     //  show.innerHTML=new Date();
//     // let ans=new Date()
//     // let show=document.querySelector("#dis")
//     //  show.innerHTML=ans;
//     // let ans=new Date()
//     // let show=document.querySelector("#dis")
//     //  show.innerHTML=ans.getDay();
//     let ans=new Date()
//     let show=document.querySelector("#dis")
//     let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     show.innerHTML=days[ans.getDay()]
    
// }
// let age=()=>{
//     let agee=document.querySelector("#yourdate").value ;
//     let birthdate=new Date(agee);
//     let today=new Date();
//     let age=today.getFullYear()-birthdate.getFullYear();
//     // let month=today.getMonth()-birthdate.getMonth();
//     document.getElementById("age").innerText = "You age " + age ;


// }
// setInterval(()=>{
//     let show=document.querySelector("#display")
//     let time=new Date();
//     show.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
// },1000)
let alaram=()=>{
    let show=document.querySelector("#display")
    let inp=document.querySelector("#inp" ).value ;
  let inter= setInterval(()=>{
        let time=new Date()
        let alaramtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes.toString().padStart(2,"0")}` 

        if(alaramtime==inp){
            show.innerHTML="Alarm  is ringing"
            document.querySelector("#aud").paly()

            setTimeout(()=>{
                document.querySelector("#aud").pause()
                clearInterval(inter)
            },7000)
        }
        else{
            show.innerHTML="Alaram set"
        }
    },1000)
}