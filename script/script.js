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
            $(".Nakuru").fadeOut();
            $(".nairobi").fadeOut();
            $(".Mombasa").fadeOut();
            
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
    function user(name,email,number){
        this.name = name;
        this.email = email;
        this.number = number;
    }  
    user.prototype.details = function(){
        $(".name").text(this.name);
        $(".email").text(this.email);
        $(".number").text(this.number)
    }
    $(".send").click(function(){
        var uName = $("#Name").val();
        var uEmail = $("#Email").val();
        var uPhone = $("#Phone").val();
        let userDetails = new user(uName,uEmail,uPhone)
        if(uName ===""|| uEmail === "" || uPhone === ""){
            alert('Please enter your details')
        }
        else  $(".service").slideToggle(500)
        userDetails.details();

    });
    $(".parts").click(function(){
        $("#parts").fadeToggle(200);
        $(".help").fadeToggle(200);
    })
});
