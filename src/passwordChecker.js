function passwordIsValid(password){
    try{
        if (password == '') throw "Password cannot be empty";
        if (password.match(/[a-z]/) == null) throw "Password should contain at least on lowercase letter";
        if (password.match(/[A-Z]/) == null) throw "Password should contain at least on uppercase letter";
        if (password.match(/[0-9]/) == null) throw "Password should contain at least one digit";
        if (password.match(/[!@#$%^&*()~<>?]/)== null)throw "Password should contain at least one character";
        if (password.length <= 8) throw "Password should have more than 8 characters";
    
    }
    catch(error){
        console.log(error);
        
    };
    

}

module.exports={
    passwordIsValid,
    passwordIsOk
}

function passwordIsOk (password){
    if(password == '' && password.length <= 8){
        if(password.match(/[a-z]/) == null || password.match(/[A-Z]/) == null || password.match(/[0-9]/) == null || 
        password.match(/[!@#$%^&*()~<>?{}]/ == null)){
            return ("Password is not okay");
        }else{
            return ("Password is okay");
        }
    
    }
}
