const displayMsg =(msg,id,colorName)=>{
    document.getElementById(id).innerText = msg
    document.getElementById(id).style.color = colorName
    
}

const fnameValidation = () =>{
    const first_name = document.getElementById('fname').value
    if(first_name == ""){
        displayMsg("First name is required",'fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("First name can only be alphabet", 'fnameMsg', 'red')
        return false
    }
    else if(first_name.length<2){
        displayMsg('Firstname must be more thatn or equal to 2', 'fnameMsg', 'red')
        return false
    }
    else{
        displayMsg('FirstName is Valid', 'fnameMsg', 'green')
        return true
    }
}

const lnameValidation = () =>{
    const first_name = document.getElementById('lname').value
    if(first_name == ""){
        displayMsg("Last name is required",'lnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("Last name can only be alphabet", 'lnameMsg', 'red')
        return false
    }
    else if(first_name.length<2){
        displayMsg('Lastname must be more thatn or equal to 2', 'lnameMsg', 'red')
        return false
    }
    else{
        displayMsg("LastName is Valid", 'lnameMsg', 'green')
        return true
    }
}

const emailValidation=() =>{
    const email = document.getElementById('email').value
    if(email == ""){
        displayMsg('Email is mandatory','emailMsg', 'red')
        return false
    }
    else if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        displayMsg("Invalid format", 'emailMsg', 'red')
        return false
    }
    else if(email.length<2){
        displayMsg('Email must be more than 2', 'emailMsg', 'red')
        return false
    }
    else{
        displayMsg("Email is Valid", 'emailMsg','green')
        return true
    }
}

const pswValidation=() =>{
    const psw = document.getElementById('psw').value
    if(psw == ""){
        displayMsg('Password is required', 'pswMsg', 'red')
        return false
    }
    else if(psw.length<8){
        displayMsg('Password length must be greater than 8','pwsMsg','red')
        return false
    }
    else if(!psw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        displayMsg("Password is weak and should be at lease 8 character", 'pswMsg', 'red')
        return false
    }
    else{
        displayMsg('Password is Valid', 'pswMsg','green')
        return true
    }
}

const cpswValidation = () =>{
    const psw = document.getElementById('psw').value
    const cpsw = document.getElementById('cpsw').value
    if(cpsw == ""){
        displayMsg('COnfirm password is required ', 'cpswMsg', 'red')
        return false
    }
    else if(psw!=cpsw){
        displayMsg('COnfirm password doesnot match with the password ', 'cpswMsg', 'red')
        return false
    }
    else{
        displayMsg("Password is matched",'cpswMsg', 'green')
        return true
    }
    
}

const validForm=()=>{
    if(fnameValidation() && lnameValidation() && emailValidation() && pswValidation() && cpswValidation()){
        displayMsg('Form Submitted', 'submitMsg', 'green')
    }
    else{
        return false
    }
}
