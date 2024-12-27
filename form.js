
let sub =()=>{
    let name = document.querySelector("#name").value;
    let num = document.querySelector("#number").value;
    let mno = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value;

    // let nam = document.querySelector("#name").focus();
    // let nu = document.querySelector("#number").focus();
    // let mn = document.querySelector("#email").focus();
    // let pas= document.querySelector("#pass").focus();
    //  let cpas = document.querySelector("#cpass").focus();

    let  errname= document.querySelector("#errname");
    let errnum= document.querySelector("#errnumber");
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
                    else if(!(mno.includes('@')&& email .includes('.com'))){
                        errmno.innerHTML="please enter vailid email"
                        return false;
                    }
                    else if(pass!=cpass){
                        errconfirm.innerHTML="password not match"
                        document.querySelector("#cpass").value="";
                        return false;
                    }
                    else if(!( 
                        pass.match(/[1234567890]/) &&
                        pass.match(/[!@#$%^&*()]/)&&
                        pass.match(/[a-z]/) &&
                        pass.match(/[A-Z]/)
                    )){
                        errcpass.innerHTML="password should have at least one upper alph synbol digit"
                        return false;
                    }
                    
                       
}
//== focus()    placeholder  // value empty

