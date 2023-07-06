let days = document.querySelector(`.days`)
let hours = document.querySelector(`.hours`)
let minutes = document.querySelector(`.minutes`)
let seconds = document.querySelector(`.seconds`);

let lastlastday;
let lasthours;
let lastminutes;
let lastseconds;

let dateNow = new Date();
let newYear = new Date().getFullYear() + 1;
let newYearMS = Date.UTC(newYear, 0, 0, 0, 0, 0, 0);
dateNow = Date.now();
let LAstTime = newYearMS - dateNow;
console.log(dateNow);
console.log(`newYear__` + newYearMS);

console.log(`LAstTime__` + LAstTime);

lastlastday = parseInt(LAstTime / 86400000);
console.log(`lastlastday _` + lastlastday);
lasthours = parseInt((LAstTime - lastlastday * 86400000) / 3600000);
console.log(`lasthours _` + lasthours);
lastminutes = parseInt((LAstTime - lastlastday * 86400000 - lasthours * 3600000) / 60000);
console.log(`lastminutes _` + lastminutes);
lastseconds = parseInt((LAstTime - lastlastday * 86400000 - lasthours * 3600000 - lastminutes * 60000) / 1000);
console.log(`lastseconds _` + lastseconds);
if (lastlastday < 10) {
    lastlastday = `0` + lastlastday
}
if (lasthours < 10) {
    lasthours = `0` + lasthours
}
if (lastminutes < 10) {
    lastminutes = `0` + lastminutes
}
if (lastseconds < 10) {
    lastseconds = `0` + lastseconds
}
days.textContent = lastlastday;
minutes.textContent = lastminutes;
hours.textContent = lasthours;
seconds.textContent = lastseconds;


