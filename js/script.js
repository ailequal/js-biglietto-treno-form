// generate button
var btnGen = document.getElementById('btn_gen');
btnGen.addEventListener('click',
  function () {
    // user name and surname
    var userNameSurname = document.getElementById('user_name_surname');
    console.log("userNameSurname set to: " + userNameSurname);
    // how much km do you want to travel?
    var travelKm = document.getElementById('travel_km');
    console.log("travelKm set to: " + travelKm);
    // how old are you?
    var userAge = document.getElementById('user_age');
    console.log("userAge set to: " + userAge);
    // ticket pricing 0.21 euros per km
    // < 18y 20% discount
    // > 65y 40% discount
    var travelPrice;
    if (userAge < 18) {
      travelPrice = Math.ceil(travelKm * 0.21 * 0.80 * 100) / 100;
    } else if (userAge > 65) {
      travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
    } else {
      travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
    }
    console.log("travelPrice set to: " + travelPrice);
  }
);
