const amount = document.getElementById("amount");
const convert = document.getElementById("convert");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
let metersToFeet = 3.281;
let feetToMeters = 0.305;
let litersToGallons = 0.264;
let gallonsToLiters = 3.788;
let kgsToPounds = 2.204;
let poundsToKgs = 0.454;

// initialize default values
length.textContent = `${amount.value} meters = ${metersToFeet} feet | ${amount.value} feet = ${feetToMeters} meters`;

volume.textContent = `${amount.value} liters = ${litersToGallons} gallons | ${amount.value} gallons = ${gallonsToLiters} liters`;

mass.textContent = `${amount.value} kilos = ${kgsToPounds} pounds | ${amount.value} pounds = ${poundsToKgs} kilos`;

// convert values
convert.addEventListener("click", () => {
  // change empty and negative values to 1
  if (amount.value == "" || amount.value <= 0) {
    amount.value = 1;
  }

  metersToFeet = (amount.value * 3.281).toFixed(3);
  feetToMeters = (amount.value / 3.281).toFixed(3);
  litersToGallons = (amount.value * 0.264).toFixed(3);
  gallonsToLiters = (amount.value / 0.264).toFixed(3);
  kgsToPounds = (amount.value * 2.204).toFixed(3);
  poundsToKgs = (amount.value / 2.204).toFixed(3);

  length.textContent = `${amount.value} meters = ${metersToFeet} feet | ${amount.value} feet = ${feetToMeters} meters`;

  volume.textContent = `${amount.value} liters = ${litersToGallons} gallons | ${amount.value} gallons = ${gallonsToLiters} meters`;

  mass.textContent = `${amount.value} kilos = ${kgsToPounds} pounds | ${amount.value} pounds = ${poundsToKgs} kilos`;

  console.log(metersToFeet);
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
