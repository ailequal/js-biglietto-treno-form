// how much km do you want to travel?
var travelKm = ;
console.log("travelKm set to: " + travelKm);

// how old are you?
var travelAge = ;
console.log("travelAge set to: " + travelAge);

// ticket pricing 0.21 euros per km
// < 18y 20% discount
// > 65y 40% discount
var travelPrice;
if (travelAge < 18) {
  travelPrice = Math.ceil(travelKm * 0.21 * 0.80 * 100) / 100;
} else if (travelAge > 65) {
  travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
} else {
  travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
}
console.log("travelPrice set to: " + travelPrice);
