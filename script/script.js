$("document").ready(function(){
    $(".help").click(function(){
        $(".details").fadeIn()
    });

function county(Countyname,subcounty){
  this.Countyname = Countyname;
  this.subcounties = [];
    }
    county.prototype.subcountieschoices = function(){
        console.log(this.Countyname)
        if(this.Countyname === "Nairobi"){
            this.subcounties =["Embakasi","Kasarani","Langata","Westlands"];
        }
        else if(this.Countyname === "Kiambu"){
            this.subcounties = ["Kikuyu","Limuru","Juja","Ruiru"];
        }
        else if (this.Countyname === "Mombasa"){
            this.subcounties = ["Nyali","Jomvu","Changamwe","Mvita","Likoni"]
        }
        else if (this.Countyname === "Nakuru"){
            this.subcounties = ["Njoro","Molo","Nakuru","Naivasha"]
        }
        return this.subcounties
    }
    $(".counties").click(function(){
  let KenyaCounty = $(".counties").val()
  console.log(KenyaCounty)
      let counties = new county(KenyaCounty)
      let final_subcounties =counties.subcountieschoices()
      console.log(final_subcounties)
      final_subcounties.map(function(subcounty){
        $(".subcounties").append(`<option value=${subcounty}}subcounty">${subcounty}</option>`);
      })
      alert("Searching.....")
        if(KenyaCounty === "Kiambu"){
            $(".kiambu").slideToggle();
        }
        else if(KenyaCounty === "Nakuru"){
            $(".Nakuru").slideToggle();
            $(".kiambu").fadeOut();
            $(".nairobi").fadeOut();
            $(".Mombasa").fadeOut();
        }
        else if(KenyaCounty === "Nairobi"){
            $(".nairobi").slideToggle();
            $(".Nakuru").fadeOut();
            $(".kiambu").fadeOut();
            $(".Mombasa").fadeOut();
        }
        else if(KenyaCounty === "Mombasa"){
            $(".Mombasa").slideToggle();
            $(".Nakuru").fadeOut();
            $(".nairobi").fadeOut();
            $(".kiambu").fadeOut();
        }
    }); 
    function user(name,email,number,registration){
        this.name = name;
        this.email = email;
        this.number = number;
        this.registration = registration
    }  
    user.prototype.details = function(){
        $(".name").text(this.name);
        $(".email").text(this.email);
        $(".number").text(this.number)
        $(".regNumb").text(this.registration)
    }
    $(".send").click(function(){
        var uName = $("#Name").val();
        var uEmail = $("#Email").val();
        var uPhone = $("#Phone").val();
        var uRegistration = $("#Registration").val()
        let userDetails = new user(uName,uEmail,uPhone,uRegistration)
        if(uName ===""|| uEmail === "" || uPhone === "" || uRegistration === ""){
            alert('Please enter your details')
        }
        else  $(".service").slideToggle(500)
        $(".userStory").slideToggle()
        userDetails.details();

    });
    $(".parts").click(function(){
        $("#parts").slideToggle();

    })
});
