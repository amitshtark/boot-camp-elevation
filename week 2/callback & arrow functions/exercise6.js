const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
const commentOnWeather = temp => "it's " + determineWeather(temp);
console.log(commentOnWeather(24));