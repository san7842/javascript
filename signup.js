// let login=()=>{

//     let loginemail=document.querySelector("#email").value
//     let loginpass=document.querySelector("#pass").value

//     let localemail=localStorage.getItem("email")
//     let localpass=localStorage.getItem("pass")

//     if(loginemail==localemail && loginpass==localpass){
//         alert("Login success")
//        location.href="signhome.html"
// }
// else{
//     alert("Login failed")
// }
// return false;
// }


// let sign=()=>{
//     let signname =document.querySelector("#name").value
//     let signnum =document.querySelector("#number").value
//     let signemail=document.querySelector("#email").value
//     let signpass=document.querySelector("#pass").value
//     let  signcpass=document.querySelector("#cpass").value

//     if(signname==""){
//         let err=document.querySelector("#name")
//         err.computedStyleMap.boder="1px solid red"
//         return false;
//     }
//     localStorage.setItem("name",signname)
//     localStorage.setItem("number",signnum)
//     localStorage.setItem("email",signemail)
//     localStorage.setItem("pass",signpass)
//     localStorage.setItem("cpass",signcpass)

//     location.href="signlog.html"
//     return false;
// }
let signup = () => {
   
    let signname = document.querySelector("#name").value;
    let signmobile = document.querySelector("#number").value;
    let signemail = document.querySelector("#email").value;
    let signpassword = document.querySelector("#password").value;
    let signcpassword=document.querySelector("#cpass").value ;

    let errorname = document.querySelector("#errname");
    let errormobile = document.querySelector("#errnumber");
    let erroremail = document.querySelector("#erremail");
    let errorpassword = document.querySelector("#errpassword");
    let errcpass=document.querySelector("#errcpassword")

    errorname.setAttribute("placeholder", "");
    errormobile.setAttribute("placeholder", "");
    erroremail.setAttribute("placeholder", "");
    errorpassword.setAttribute("placeholder", "");
    errcpass.setAttribute("placeholder"," ");

   
    if (signname === "") {
        errorname.setAttribute("placeholder", "Please Enter your Name");
        errorname.style.borderColor = "red";
        document.querySelector("#name").focus();
        return false;
    }

    
    if (isNaN(signmobile)) {
        errormobile.setAttribute("placeholder", "Please Enter a valid Mobile Number");
        errormobile.style.borderColor = "red";
        document.querySelector("#number").focus();
        return false;
    } else if (signmobile === "") {
        errormobile.setAttribute("placeholder", "Please Enter your Mobile");
        errormobile.style.borderColor = "red";
        document.querySelector("#number").focus();
        return false;
    } else if (signmobile.length !== 10) {
        errormobile.setAttribute("placeholder", "Please Enter 10 digit Mobile Number");
        errormobile.style.borderColor = "red";
        document.querySelector("#number").focus();
        return false;
    }

  
    if (!(signemail.includes('@') && signemail.includes('.com'))) {
        erroremail.setAttribute("placeholder", "Please Enter a Valid Email");
        erroremail.style.borderColor = "red";
        document.querySelector("#email").focus();
        return false;
    } else if (signemail === "") {
        erroremail.setAttribute("placeholder", "Please Enter your Email");
        erroremail.style.borderColor = "red";
        document.querySelector("#email").focus();
        return false;
    }

   
    if (!(signpassword.match(/[1234567890]/) &&
        signpassword.match(/[!@#$%^&*()]/) &&
        signpassword.match(/[a-z]/) &&
        signpassword.match(/[A-Z]/))) {
        document.querySelector("#password").focus();
        alert("Password should have at least one uppercase letter, one lowercase letter, one digit");
        return false;
    } else if (signpassword === "") {
        errorpassword.setAttribute("placeholder", "Please Enter your Password");
        errorpassword.style.borderColor = "red";
        document.querySelector("#password").focus();
        return false;
    }
    // else if(signpassword!=signcpassword){
    //     errcpass.innerHTML="password not match"
    //      errcpass.style.color="red"
    //     document.querySelector("#cpasss").value="";
       
    //     return false;
    // }


  
    localStorage.setItem("name", signname);
    localStorage.setItem("number", signmobile);
    localStorage.setItem("email", signemail);
    localStorage.setItem("password", signpassword);
    // localStorage.setItem("cpass",signcpass);

   
    location.href = "signlog.html";
    return false; 
}
let login=()=>{

    let loginname = document.querySelector("#email").value;
    let loginpassword = document.querySelector("#password").value;

    let errornamelogin = document.querySelector("#erremail");
    let errorpasswordlogin = document.querySelector("#errpassword");

    errornamelogin.setAttribute("placeholder", "");
    errorpasswordlogin.setAttribute("placeholder", "");

    if (loginname === "") {
        errornamelogin.setAttribute("placeholder", "Please Enter your Name");
        errornamelogin.style.borderColor = "red";
        document.querySelector("#name").focus();
        return false;
    }

    if (!(loginpassword.match(/[1234567890]/) &&
    loginpassword.match(/[!@#$%^&*()]/) &&
    loginpassword.match(/[a-z]/) &&
    loginpassword.match(/[A-Z]/))) {
    document.querySelector("#password").focus();
    alert("Password should have at least one uppercase letter, one lowercase letter, one digit");
    return false;

}
 else if (loginpassword === "") {
    errorpasswordlogin.setAttribute("placeholder", "Please Enter your Password");
    errorpasswordlogin.style.borderColor = "red";
    document.querySelector("#password").focus();
    return false;
}

let storedName = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");


if (loginname === storedName && loginpassword === storedPassword) {
    alert("Login Successful");
    location.href = "signhome.html"; 
} else {
    alert("Login credentials do not match!");
}
return false
}

let logout=()=> {
    
      document.getElementById('logout-button').style.display = 'none';
       alert('Logged out successfully');
    return false
 }