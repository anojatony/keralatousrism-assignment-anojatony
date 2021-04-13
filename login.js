let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error=document.getElementById("error");
let pwderror=document.getElementById("pwderror");
let checkbox=document.getElementById("checkbox");
let errspan=document.getElementById("errspan");
let erspan=document.getElementById("erspan");
let pwdspan=document.getElementById("pwdspan");
let pwspan=document.getElementById("pwspan");

function validate(){
    if(email.value.trim() ==""){
        email.style.border="1px solid red";
        error.innerHTML="** Please Enter Your Email";
        error.style.color="red";
        errspan.style.visibility="visible";
        error.style.fontWeight="500";
        return false;
    }
        else{
            error.innerHTML="";
            email.style.border="1px solid green";
            errspan.style.visibility="hidden";
           return true;
       }
   }
   function validatepwd(){
    if(pwd.value.trim() ==""){
        pwd.style.border="1px solid red";
        pwderror.innerHTML="** Please Enter Your Password";
        pwderror.style.color="red";
        pwdspan.style.visibility="visible";
        pwderror.style.fontWeight="500";
        return false;
    }
    
    
else{
    pwd.style.border="1px solid green";
    pwderror.innerHTML="";
    pwdspan.style.visibility="hidden";
   return true;
}
}

 function check(){
    if(checkbox.checked == false){
        alert("Please Confirm");
       return false;
    }
    else{
        return true;
    }
 }
