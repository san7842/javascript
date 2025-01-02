let store="";
let pressed=(value)=>{
    let show=document.querySelector("#display")
    store=store+value;
    show.innerHTML=store;

}
let equll=()=>{
    let show=document.querySelector("#display")
    show.innerHTML=eval(store);
    store=eval(store);
    store=toString();
} 
let DEL=()=>{
    store=store.slice(0,-1);
    let show=document.querySelector("#display")
    show.innerHTML=store;   
}
let AC=()=>
{   store="";
    let show=documen.querySelector("#display")
    show.innerHTML=store;
}