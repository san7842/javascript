// let start=()=>{

//     setInterval(()=>{
//      console.log("runningggg")
//     },2000)
// }


// let start=()=>{
//     let counter=1;

//     setInterval(()=>{

//      console.log(counter);
//      counter++

//     },1000)
// }



// let start=()=>{
//     let counter=1;

//    let inter = setInterval(()=>{

//      console.log(counter);
//      counter++

//      if(counter===6){
//         clearInterval(inter);

//      }

//     },1000)
// }



let Isname=true;
setInterval(() => {
    let display =document.querySelector("#display")
    display.innerHTML=Isname?"Suraj":"Adrsh"

    if(Isname=true){
        Isname=false
    }else{
        Isname=true
    }
    
}, 1000);