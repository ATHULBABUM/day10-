function validationform(form){
var gmail=form.email.value;
var pass=form.password.value;
var emailre=/\S+@\S+\.\S+/;
console.log(gmail);

if(emailre.test(gmail)==false){

    alert("please enter a valid email");
    return false;
}
else if(pass.length<6){
    alert("enter atleast 6 digits for secure password");
    return false;
}
}