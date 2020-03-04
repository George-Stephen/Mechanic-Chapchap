$("document").ready(function(){
    $(".help").click(function(){
        $(".1").slideToggle()
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
            $("#kiambu").slideToggle();
        }
        else if(KenyaCounty === "Nakuru"){
            $(".Nakuru").slideToggle();
        }
        else if(KenyaCounty === "Nairobi"){
            $(".nairobi").slideToggle();
        }
        else if(KenyaCounty === "Mombasa"){
            $(".Mombasa").slideToggle();
        }
    });   
});
