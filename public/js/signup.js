function validationform(form){
    var gmail=form.email.value;  
    var emailre=/\S+@\S+\.\S+/;
    var num=form.phonenumber.value;
    var phnumber=/(6|7|8|9)\d{9}$/;
    var pass1=form.password1.value;
    var pass2=form.password2.value;
     if(emailre.test(gmail)==false){
      alert("please enter a valid email");
      return false;
    }
      else if(phnumber.test(num)==false){
        alert("please entr a valid phone number");
      return false;
    }
       else if(pass1 != pass2){
         alert("Password doesn't match. Please enter same password");
       return false;
    }
}
