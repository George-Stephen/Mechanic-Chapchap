 
  
    var $this = $(this);
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  
  
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