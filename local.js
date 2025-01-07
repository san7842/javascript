let loc=()=>{
    let inp=document.querySelector("inp").value ;
    let inpage=document.querySelector("inpage").value ;
    // localStorage.setItem("name","sandeep")
    // localStorage.setItem("age","23")
    localStorage.setItem("name",inp)
     localStorage.setItem("age",inpage)
}

 let sho=document.querySelector("#show")
 let localname=localStorage.getItem("name")
 let localage=localStorage.getItem("age")
 sho.innerHTML=`your name is ${localname} and age is ${localage}`
 let remove=()=>{
    localStorage.removeItem("name")
 }