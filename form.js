
let sub =()=>{
    let name = document.querySelector("#name").value;
    let num = document.querySelector("#number").value;
    let mno = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value;

    let  errname= document.querySelector("#errname");
    let errmail= document.querySelector("#errnumber");
    let errno= document.querySelector("#erremail");
    let errpass = document.querySelector("#errpass");
    let  errconfirm = document.querySelector("#errcpass");
      
      
        if(name===""){
              errname.innerHTML="enter your name ";
              errname.style.color="red";
              return false;
          }
        if(mno===""){
            errno.innerHTML="enter your no ";
            errno.style.color="red";
            return false;
                }
        if(num===""){
             errmail.innerHTML="enter your email";
             errmail.style.color="red";
            return false;
             }
        if(pass===""){
            errpass.innerHTML="enter your pass";
            errpass.style.color="red";
            return false;
                        }
        if(cpass===""){
         errconfirm.innerHTML="enter your cpass";
         errconfirm.style.color="red";
            return false;
                        }
}
