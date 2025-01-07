let submit=()=>{
   let emaill=document.querySelector("#email").value ;
   let pass=document.querySelector("#pass").value ;
  
   let erremail=document.querySelector("#erremail");
   let errpass=document.querySelector("#errpass");

   if(emaill===""){
      erremail.innerHTML="please enter email"
      erremail.style.color="red"
      return false;
   }
   if(pass===""){
      errpass.innerHTML="please enter email"
      errpass.style.color="red"
      return false;
   }
   else if(!(emaill.include('@')&& emaill.include('.com') )){
               erremail.innerHTML="enter vailid email";
               erremail.style.color="red";
              return false;
                 }
}