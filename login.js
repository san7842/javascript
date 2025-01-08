// let submit=()=>{
//    let nam=document.querySelector("#name").value ;
//    let num=document.querySelector("#num").value ;
//    let emaill=document.querySelector("#email").value ;
//    let pass=document.querySelector("#pass").value ;
//    let cpass=document.querySelector("#Cpass").value ;
  
//    let errnam=document.querySelector("#errnam");
//    let errnum=document.querySelector("#errnum");
//    let erremail=document.querySelector("#erremail");
//    let errpass=document.querySelector("#errpass");
//    let errcpass=document.querySelector("#errCpass");

//    if(nam===""){
//       errnam.innerHTML="please enter your name"
//       errnam.style.color="red"
//       return false;
//    }
//    if(num===""){
//       errnum.innerHTML="please enter your number"
//       errnum.style.color="red"
//       return false;
//    }

//    if(emaill===""){
//       erremail.innerHTML="please enter email"
//       erremail.style.color="red"
//       return false;
//    }
//    if(pass===""){
//       errpass.innerHTML="please enter password"
//       errpass.style.color="red"
//       return false;
//    }
//    if(cpass===""){
//       errcpass.innerHTML="please enter confirm password"
//       errcpass.style.color="red"
//       return false;
//    }

//    else if(!(emaill.include('@')&& emaill.include('.com') )){
//                erremail.innerHTML="enter vailid email";
//               return false;
//                  }
//    else if(isNaN(num)) {
//                 errnum.innerHTML="enter your  vailid no ";
//                   return false;
//                       }
//    else if(num.length!=10){
//                 errnum.innerHTML="please enter 10 digit"
//                           return false;
//                       }
//                      //  else if(!(mno.includes('@')&& mno .includes('.com'))){
//                      //      errmno.innerHTML="please enter vailid email"
//                      //      return false;
//                      //  }
//    else if(pass!=cpass){
//                    errconfirm.innerHTML="password not match"
//                    document.querySelector("#cpass").value="";
//                           return false;
//                       }
//    else if(!( 
//              pass.match(/[1234567890]/) &&
//              pass.match(/[!@#$%^&*()]/)&&
//              pass.match(/[a-z]/) &&
//              pass.match(/[A-Z]/)
//             )){
//                       errcpass.innerHTML="password should have at least one upper alph synbol digit"
//                          return false;
//                       }
// }
let submit =()=>{
   let name = document.querySelector("#name").value;
   let num = document.querySelector("#number").value;
   let mno = document.querySelector("#email").value;
   let pass = document.querySelector("#pass").value;
   let cpass = document.querySelector("#cpass").value;


   let  errname= document.querySelector("#errname");
   let errnum= document.querySelector("#errnum");
   let errmno= document.querySelector("#erremail");
   let errpass = document.querySelector("#errpass");
   let  errcpass = document.querySelector("#errcpass");
     
     
       if(name===""){
             errname.innerHTML="enter your name ";
             errname.style.color="red";
             document.querySelector("#name").placeholder="enter your name"
             return false;
         }
       if(num===""){
           errnum.innerHTML="enter your no ";
           errnumstyle.color="red";
           return false;
               }
       if(mno===""){
            errmno.innerHTML="enter your email";
            errmno.style.color="red";
           return false;
            }
       if(pass===""){
           errpass.innerHTML="enter your pass";
           errpass.style.color="red";
           return false;
                       }
       if(cpass===""){
        errcpass.innerHTML="enter your cpass";
        errcpass.style.color="red";
           return false;
                       }
                       // ================number============
            else if(isNaN(num)) {
               errnum.innerHTML="enter your  vailid no ";
               errnum.style.color="red";
               // errnum.value = ""; 
               // errnum.placeholder = "Type something..."; 
               // errnum.focus();
               return false;
                   }
                   else if(num.length!=10){
                       errnum.innerHTML="please enter 10 digit"
                       return false;
                   }
                   else if(!(mno.includes('@')&& mno .includes('.com'))){
                       errmno.innerHTML="please enter vailid email"
                       return false;
                   }
                   else if(pass!=cpass){
                       errcpass.innerHTML="password not match"
                       document.querySelector("#cpass").value="";
                       return false;
                   }
                   else if(!( 
                       pass.match(/[1234567890]/) &&
                       pass.match(/[!@#$%^&*()]/)&&
                       pass.match(/[a-z]/) &&
                       pass.match(/[A-Z]/)
                   )){
                       errpass.innerHTML="password should have at least one upper alph synbol digit"
                       return false;
                   }
                   
                      
}