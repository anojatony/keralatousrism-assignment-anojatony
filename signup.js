let cit =document.getElementById("cit");
let citerror=document.getElementById("citerror");
let citi =document.getElementById("citi");
let citierror=document.getElementById("citierror");
let email = document.getElementById("email");
let error=document.getElementById("error");
let pwderror=document.getElementById("pwderror");
let ph=document.getElementById("ph");
let pherror=document.getElementById("pherror");
let ad=document.getElementById("ad");
let aderror=document.getElementById("aderror");
let city=document.getElementById("city");
let zip=document.getElementById("zip");
let ziperror=document.getElementById("ziperror");
let cityerror=document.getElementById("cityerror");
let stat = document.getElementById("stat");
let checkboxz=document.getElementById("checkboxz");

function firstname(){
    let regcity= /^[A-Za-z\s]+$/;
    if(cit.value.trim() ==""){
        cit.style.border="1px solid red";
        citerror.innerHTML="** Please Enter Your First Name";
        citerror.style.color="red";
        citerror.style.fontWeight="500";
        return false;
    }
    else if(regcity.test(cit.value)==false){
         cit.style.border="1px solid red";
         citerror.innerHTML="** Only alphabets are allowed ";
         citerror.style.color="grey";
         return false;
    }   
    else{
        cit.style.border="1px solid green";
        citerror.innerHTML="";
        return true;
    }
}

function lastname(){
    let regcity= /^[A-Za-z\s]+$/;
     if(citi.value.trim() ==""){
        citi.style.border="1px solid red";
        citierror.innerHTML="** Please Enter Your Last Name";
        citierror.style.color="red";
        citierror.style.fontWeight="500";
        return false;
    }
    else if(regcity.test(citi.value)==false){
         citi.style.border="1px solid red";
         citierror.innerHTML="** Only alphabets are allowed";
         citierror.style.color="grey";
         citierror.style.fontWeight="500";
         return false;
    }   
    else{
        citi.style.border="1px solid green";
        citierror.innerHTML="";
        return true;
    }
}

function validation(){
    let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,4}?)$/;
    if(email.value.trim() ==""){
        email.style.border="1px solid red";
        error.innerHTML="** Please Enter Your Email";
        error.style.color="red";
        error.style.fontWeight="500";
        return false;
    }
    else if(regexp.test(email.value)==false){
            error.innerHTML="** Strictly follow the email format (eg: abc@gmail.com)";
            email.style.border="1px solid red";
            error.style.color="grey";
            error.style.textAlign="justify";
            error.style.fontWeight="500";
            return false;
        }  
    else{
            error.innerHTML="";
            email.style.border="1px solid green";
           return true;
       }
   }
    
   function passwordChanged() {
    let strength = document.getElementById('strength');
    let strong = new RegExp("^(?=.*[!@#&()$^*–:;])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,15}).*$", "g");
    let medium = new RegExp("^(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    let pwd = document.getElementById("password");
    let progress=document.getElementById("progress");

    if(pwd.value.trim() ==""){
        pwd.style.border="1px solid red";
        pwderror.innerHTML="** Please Enter Your Password";
        pwderror.style.color="red";
        progress.style.width="";
        pwderror.style.fontWeight="500";
        progress.innerHTML="";
        return false;
    }
    else if (pwd.value.length<=3) {
        strength.innerHTML = "*Poor Password";
        strength.style.fontWeight="500";
        pwd.style.border="1px solid red";
        strength.style.color="red";
        pwderror.innerHTML="**Your password is weak";
        pwderror.style.color="grey";
        pwderror.style.fontWeight="500";
        progress.style.width="30%";
        progress.style.backgroundColor="#D80000";
        progress.style.visibility="visible";
        progress.innerHTML="weak";
        return false;
    }
    else if (pwd.value.length>3 && pwd.value.length<=6) {
        strength.innerHTML = "*Your password range is medium";
        strength.style.color="#FF4500";
        pwd.style.border="1px solid orange";
        pwderror.innerHTML="**Password should contain minimum 8 characters with at least one uppercase, lowercase, special characters & digits.";
        pwderror.style.color="grey";
        progress.style.width="70%";
        progress.style.backgroundColor="#FF4500";
        strength.style.fontWeight="500";
        pwderror.style.fontWeight="500";
        pwderror.style.textAlign="justify";
        progress.style.visibility="visible";
        progress.innerHTML="Medium";
        return false;
    }
    else if (medium.test(pwd.value)==false) {
        strength.innerHTML = "*Your password range is medium";
        strength.style.color="#FF4500";
        pwd.style.border="1px solid orange";
        pwderror.innerHTML="**Password should contain minimum 8 characters with at least one uppercase, lowercase, special characters & digits.";
        pwderror.style.color="grey";
        progress.style.width="70%";
        progress.style.backgroundColor="#FF4500";
        strength.style.fontWeight="500";
        pwderror.style.fontWeight="500";
        pwderror.style.textAlign="justify";
        progress.style.visibility="visible";
        progress.innerHTML="Medium";
        return false;
    }
    else if (strong.test(pwd.value)==false) {
        strength.innerHTML = "*Perfect! Strong Password";
        strength.style.color="green"
        pwd.style.border="1px solid green";
        pwderror.style.color="grey";
        pwderror.style.fontWeight="500";
        pwderror.innerHTML="**Password should contain minimum 8 characters with at least one uppercase, lowercase, special characters & digits.";
        progress.style.width="100%";
        progress.style.backgroundColor="green";
        strength.style.fontWeight="500";
        pwderror.style.textAlign="justify";
        progress.style.visibility="visible";
        progress.innerHTML="Strong";
        return false;
    }
     else {
        pwd.style.border="1px solid green";
        strength.innerHTML = "";
        pwderror.innerHTML="";
        progress.style.width="";
        progress.innerHTML="";
        return true;
    }
}

function validationph(){
    let regph=/^([0-9]{3})[\s-. ]?([0-9]{3})[\s-. ]?([0-9]{4})$/;
    if(ph.value.trim() ==""){
        ph.style.border="1px solid red";
        pherror.innerHTML="** Please Enter Your Phone number";
        pherror.style.color="red";
        pherror.style.fontWeight="500";
        return false;
    }
    else if(regph.test(ph.value)==false){
            pherror.innerHTML="** Phone number with 10 digits are only valid";
            ph.style.border="1px solid red";
            pherror.style.color="grey";
            pherror.style.textAlign="justify";
            pherror.style.fontWeight="500";
            return false;
    }
    
     else{
           ph.style.border="1px solid green";
           pherror.innerHTML="";
           return true;
         }
}
    function address(){
    let regad= /^[A-Za-z0-9\s,/\.-]+$/;
    if(ad.value.trim() ==""){
            ad.style.border="1px solid red";
            aderror.innerHTML="** Please Enter Your Address";
            aderror.style.color="red";
            aderror.style.fontWeight="500";
            return false;
        }
    else if(regad.test(ad.value)==false){
             ad.style.border="1px solid red";
             aderror.innerHTML="** Address should contain only special characters (./-,)";
             aderror.style.color="grey";
             aderror.style.textAlign="justify";
             aderror.style.fontWeight="500";
             return false;
        }
    else{
            aderror.innerHTML="";
            ad.style.border="1px solid green";
            return true;
        }
    }

    function cityname(){
     let regcity= /^[A-Za-z\s]+$/;
    if(city.value.trim() ==""){
            city.style.border="1px solid red";
            cityerror.innerHTML="** Enter Your City name";
            cityerror.style.color="red";
            cityerror.style.fontWeight="500";
            return false;
        }
    else if(regcity.test(city.value)==false){
             city.style.border="1px solid red";
             cityerror.innerHTML="** Only alphabets are allowed";
             cityerror.style.color="grey";
             cityerror.style.fontWeight="500";
             return false;
        }      
    else{
            city.style.border="1px solid green";
            cityerror.innerHTML="";
            return true;
        }
    }
    
    function statename(){
         if(stat.value ==""){
            alert("Choose your state");
            return false;
         }
         else {
             return true;
         }
    }

    function zipcode(){
        let regzip=/^[0-9]{6}$/;
        if(zip.value.trim() ==""){
            zip.style.border="1px solid red";
            ziperror.innerHTML="** Enter Zip Code";
            ziperror.style.color="red";
            ziperror.style.textAlign="justify";
            ziperror.style.fontWeight="500";
            return false;
        }
        else if(zip.value.length<6){
            zip.style.border="1px solid red";
            ziperror.innerHTML="**6 digits required";
            ziperror.style.color="grey";
            ziperror.style.textAlign="justify";
            ziperror.style.fontWeight="500";
            return false;
        }
        else if(regzip.test(zip.value)==false){
            zip.style.border="1px solid red";
            ziperror.innerHTML="** Values (0-9) are only allowed";
            ziperror.style.color="grey";
            ziperror.style.textAlign="justify";
            ziperror.style.fontWeight="500";
             return false;
        }  
        else{
            zip.style.border="1px solid green";
            ziperror.innerHTML="";
            return true;
        }
    }

    function checkinput(){
        if(checkboxz.checked==false){
            alert("Please Confirm");
            return false;
        }   
        else {
            return true;
        }
    }