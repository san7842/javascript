// console.log(Math.PI);
// console.log(Math.abs(-7));
// console.log(Math.floor(1000+Math.random()*9000))
let roll=()=>{

    let dice=(Math.floor(Math.random()*6)+1)
    console.log(dice);
   let box1=document.querySelector("#box1")
   let box2=document.querySelector("#box2")
   let box3=document.querySelector("#box3")
   let box4=document.querySelector("#box4")
   let box5=document.querySelector("#box5")
   let box6=document.querySelector("#box6")
    
    if(dice==1){
        box1.style.opacity=1;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    if(dice==2){
        box1.style.opacity=0;
        box2.style.opacity=1;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    if(dice==3){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=1;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    if(dice==4){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=1;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    if(dice==5){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=1;
        box6.style.opacity=0;
    }
    if(dice==6){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=1;
    }
}