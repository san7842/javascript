// console.log("hello")
// //async await
let fetchDate=async()=>{ 
    let url='http://localhost:3000/doctor'
    let res=await fetch(url,{method:"GET"})
    let date=await res.json()
    console.log(date);
    let show=document.querySelector("#display")
    date.map((e)=>{
        show.innerHTML+=`
        <tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.number}</td>
            <td>${e.problem}</td>
            <td>${e.date}</td>
            <td>${e.price}</td>
            <td  style="color:red" onclick="deletee ('${e.id}')">Delete</td>
        </tr>
    `})
   
}
let deletee=(id)=>{
    let url=`http://localhost:3000/doctor/${id}`
    fetch(url,{method:"DELETE"})
}
let insertt=()=>{
    let inpname=document.querySelector("#inpname").value;
    let inpage=document.querySelector("#inpage").value;
    let inpnum=document.querySelector("#inpnum").value;
    let inpdate=document.querySelector("#inpdate").value;
    let inpprob=document.querySelector("#inpprob").value;
    let url='http://localhost:3000/doctor'
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"appliction/json"
        },
        body:JSON.stringify({
            name:inpname,
            age:inpage,
            number:inpnum,
            problem:inpprob,
            date:inpdate,
            price:250
            

            
        })
    })
 location.href="CRUD.html"

 return false
}