function Temperature(){
}

Temperature.prototype.convertKelvinToF = function(temp) {
  return Math.round(temp * 1.8 - 459.67);
};

Temperature.prototype.convertKelvinToC = function(temp) {
  return Math.round(temp - 273.15);
};

exports.temperatureModule = Temperature;
