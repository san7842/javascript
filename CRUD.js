// console.log("hello")
// //async await
let fetchDate=async()=>{ 
    try{
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
             <td  style="color:blue" onclick="FormFill ('${e.id}')">Update</td>
        </tr>
    `})
    }
    catch(err){
    console.log("My error"+err)
   
}
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
let FormFill=async(id)=>{
   let url='http://localhost:3000/doctor'
   let res=await fetch(url)
   let data=await res.json()
   console.log(data);
   let datafill=`
    Enter Name<input type="text"  value="${data.name}" id="upname">
        Enter Age<input type="number" value="${data.age}" id="upage">
        Enter Number<input type="number"  value="${data.number}"id="upnum">
        <select id="upprob">
            <option value="cold">Cold</option>
            <option value="cold">Fever</option>
            <option value="cold">Cough</option>
            <option value="Accidental-case">Accidental-case</option>
            <option value="Cancer">Cancer</option>
        </select>
        Enter date<input type="date" value="${data.date}"id="inpdate">
       <input type="submit" id="inser" value="update" onclick="return insertt()">`
       document.querySelector("#formdata").innerHTML=datafill
}