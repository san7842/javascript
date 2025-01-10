let sub=()=>{
    let nam=document.querySelector("#name").value ;
    let num=document.querySelector("#number").value ;
    let emaill=document.querySelector("#email").value ;
    let passs=document.querySelector("#pass").value ;
    let cpasss=document.querySelector("#cpass").value ;

    let errnam=document.querySelector("#errname") 
    let errnum=document.querySelector("#errnumber")
    let erremaill=document.querySelector("#erremail") 
    let errpasss=document.querySelector("#errpass") 
    let errcpasss=document.querySelector("#errcpass")


    if(nam===""){
        errnam.innerHTML="enter your name ";
        errnam.style.color="red";
        document.querySelector("#name").placeholder="enter your name"
        return false;
    }
  if(num===""){
      errnum.innerHTML="enter your no ";
     errnum.style.color="red";
      return false;
          }
  if(emaill===""){
       erremaill.innerHTML="enter your email";
       erremaill.style.color="red";
      return false;
       }
  if(passs===""){
      errpasss.innerHTML="enter your pass";
      errpasss.style.color="red";
      return false;
                  }
  if(cpasss===""){
   errcpasss.innerHTML="enter your cpass";
   errcpasss.style.color="red";
      return false;
                  }
                  // ================number============
       else if(isNaN(num)) {
          errnum.innerHTML="enter your  vailid no ";
          errnum.style.color="red";
          return false;
              }
              else if(num.length!=10){
                  errnum.innerHTML="please enter 10 digit"
                  errnum.style .color="red"
                  return false;
              }
              else if(!(emaill.includes('@')&& emaill.includes('.com'))){
                  erremaill.innerHTML="please enter vailid email"
                  erremaill.style.color="red"
                  return false;
              }
              else if(!( 
                passs.match(/[1234567890]/) &&
                passs.match(/[!@#$%^&*()]/)&&
                passs.match(/[a-z]/) &&
                passs.match(/[A-Z]/)
            )){
                errpasss.innerHTML="create strong password"
                errcpasss.style.color="red"
                return false;
            }
              else if(passs!=cpasss){
                  errcpasss.innerHTML="password not match"
                   errpasss.style.color="red"
                  document.querySelector("#cpasss").value="";
                 
                  return false;
              }
             
              
                 
}