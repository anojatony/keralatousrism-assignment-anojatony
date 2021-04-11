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
let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,4}?)$/;
    if(email.value.trim() ==""){
        email.style.border="1px solid red";
        error.innerHTML="** Please Enter Your Email";
        error.style.color="red";
        errspan.style.visibility="visible";
        error.style.fontWeight="500";
        return false;
    }
    else if(regexp.test(email.value)==false){
            error.innerHTML="** Strictly follow the email format (eg: abc@gmail.com)";
            email.style.border="1px solid red";
            error.style.color="grey";
            error.style.textAlign="justify";
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
   let regpass= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()$^*–:;]).{8,15}$/;   
    if(pwd.value.trim() ==""){
        pwd.style.border="1px solid red";
        pwderror.innerHTML="** Please Enter Your Password";
        pwderror.style.color="red";
        pwdspan.style.visibility="visible";
        pwderror.style.fontWeight="500";
        return false;
    }
    else if(regpass.test(pwd.value)==false){
            pwderror.innerHTML="** Password should contain minimum 8 characters with at least one uppercase, lowercase, special characters & digits.";
            pwd.style.border="1px solid red";
            pwderror.style.color="grey";
            pwderror.style.textAlign="justify";
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