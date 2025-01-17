// console.log("hello")
// //async await
let fetchDate=async()=>{ 
    let url='http://localhost:3000/doctor'
    let res=await fetch(url,{method:"GET"})
    let date=await res.json()
    console.log(date);
   
}