let submit=()=>{
    let namee=document.querySelector("#name").value ;
    let num=document.querySelector("#number").value ;
    let emaill=document.querySelector("#email").value ;
    let pass=document.querySelector("#password").value ;
    let cpass=document.querySelector("#cpassword").value ;

    let errna=document.querySelector("#errname");
    let errnum=document.querySelector("#errnumber");
    let erremaill=document.querySelector("#erremail");
    let errpass=document.querySelector("#errpass");
    let errcpass=document.querySelector("#errcpass");

 if(namee===""){
    errna.innerHTML="enter your name"
    errna.style .color="red";
    document.querySelector("#name").placeholder="Enter your name";
    return false;
 }
 if(num===""){
    errnum.innerHTML="enter your number";
    errnum.style.color="red";
    return false;
 }
 if(emaill===""){
    erremaill.innerHTML="enter your email";
    erremaill.style.color="red";
    return false;
 }
 if(pass===""){
    errpass.innerHTML="enter password";
    errpass.style.color="red";
    return false;
 }
 if(cpass===""){
    errcpass.innerHTML="enter comfirm password"
    errcpass.style.color="red";
    return false;
 }
    else if(isNaN(num)){
        errnum.innerHTML="enter vailid number";
        errnum.style.color="red";
        return false
     }
     else if(num.length!=10){
        errnum.innerHTML="enter valid 10 digit"
        errnum.style.color="red";
        return false;
     }
     else if(!(emaill.include('@')&& emaill.include('.com') )){
        erremaill.innerHTML="enter vailid email";
        erremaill.style.color="red";
        return false;
     }

}