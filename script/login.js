/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
<<<<<<< HEAD
    var $this = $(this);
        label = $this.prev('label');
=======
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
>>>>>>> bb9f57a10d05a726d78f2d502147af4b57ede221
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
<<<<<<< HEAD
  
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(800);
    
  });
  function user(fname,lname,Email,phone,Password){
    this.fname = fname;
    this.lname = lname;
    this.Email = Email;
    this.phone = phone;
    this.Password = Password;
  }
  user.prototype.signin = function(){
      var userDetails = [user];
  }
  $("#sign").click(function(event){
    event.preventDefault()
    var first_name = $("#first_name").val();
    var last_name =$("#last_name").val();
    var email = $("#mail").val();
    var phone = $("#phone").val();
    var Password =$("#pass").val();
     let userEntry = new user(first_name,last_name,email,phone,Password);
     userEntry.signin.push(userEntry)
     console.log(userEntry);
  })
=======
  }



>>>>>>> bb9f57a10d05a726d78f2d502147af4b57ede221
