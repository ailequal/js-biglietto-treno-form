// generate button
var btnGen = document.getElementById('btn_gen');
btnGen.addEventListener('click',
  function () {
    // user name and surname
    var userNameSurname1 = document.getElementById('user_name_surname_1').value;
    var userNameSurname2 = document.getElementById('user_name_surname_2').innerHTML = userNameSurname1;
    console.log("userNameSurname1 set to: " + userNameSurname1);
    // how much km do you want to travel?
    var travelKm = document.getElementById('travel_km').value;
    console.log("travelKm set to: " + travelKm);
    // how old are you?
    var userAge = document.getElementById('user_age').value;
    console.log("userAge set to: " + userAge);
    // ticket pricing 0.21 euros per km
    // < 18y 20% discount
    // > 65y 40% discount
    // else 0% discount
    var travelPrice = document.getElementById('travel_price');
    var offers = document.getElementById('offers');
    if (userAge == 'minor') {
      travelPrice.innerHTML = Math.ceil(travelKm * 0.21 * 0.80 * 100) / 100;
      offers.innerHTML = 'Minor ticket';
    } else if (userAge == 'over65') {
      travelPrice.innerHTML = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
      offers.innerHTML = 'Over 65 ticket';
    } else {
      travelPrice.innerHTML = Math.ceil(travelKm * 0.21 * 1.00 * 100) / 100;
      offers.innerHTML = 'Standard ticket';
    }
    console.log("travelPrice set to: " + travelPrice.innerHTML);
    // random wagon generator
    var wagon = document.getElementById('wagon');
    wagon.innerHTML = Math.floor(Math.random() * 10) + 1;
    // random reservation code generator
    var reservationCode = document.getElementById('reservation_code');
    reservationCode.innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000);
    // set ticket section display
    var ticket = document.getElementById('ticket');
    ticket.className = 'ticket display_block';
  }
);

// canc button
var btnCanc = document.getElementById('btn_canc');
btnCanc.addEventListener('click',
  function () {
    // user name and surname
    var userNameSurname1 = document.getElementById('user_name_surname_1').value = "";
    var userNameSurname2 = document.getElementById('user_name_surname_2').innerHTML = "";
    console.log("userNameSurname1 set to: " + userNameSurname1);
    // km
    var travelKm = document.getElementById('travel_km').value = '';
    console.log("travelKm set to: " + travelKm);
    // age
    var userAge = document.getElementById('user_age').value = '';
    console.log("userAge set to: " + userAge);
    // ticket pricing
    var travelPrice = document.getElementById('travel_price').innerHTML = "";
    var offers = document.getElementById('offers').innerHTML = "";
    console.log("travelPrice set to: " + travelPrice.innerHTML);
    // wagon
    var wagon = document.getElementById('wagon').innerHTML = "";
    // reservation code
    var reservationCode = document.getElementById('reservation_code').innerHTML = "";
    // set ticket section display
    var ticket = document.getElementById('ticket');
    ticket.className = 'ticket display_none';
  }
);
