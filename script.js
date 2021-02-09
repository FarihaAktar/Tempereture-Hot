const button = document.getElementById('button');
button.addEventListener('click', function(){
  const cityName = document.getElementById("city-name").value;
  document.getElementById("place").innerHTML = cityName;
  weatherForecast(cityName);
})



function weatherForecast(place){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + place + '&units=metric&appid=293a157778b5b4e891e9665acf1b0fa8')
    .then(response => response.json())
    // .then(data => console.log(data.weather[0].main))
    // .then(data => console.log(data.main.temp))
    .then(data => {
      const temperature = data.main.temp;
      document.getElementById("celsius").innerHTML = temperature;
      document.getElementById("value").innerHTML = data.weather[0].main;
      const img = document.getElementById("image");
      img.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
      // img.src = data.weather[0].icon;

      // console.log(data.weather[0])
      // .attributes("src",data.weather[0].icon) ;

    })
    
}
weatherForecast("dhaka")

