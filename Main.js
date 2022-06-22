


function openWeather(){
   let link="https://api.openweathermap.org/data/2.5/weather?q=";
   let appId="&appid=fb7d1b30a7118355b40022d2ba41b9b6";
   let metricUnit="&units=metric";
   let city=document.getElementById("userInput").value;
   let newLink=link+city+appId+metricUnit;
   console.log(newLink)
   
   fetch(newLink)
      .then(response=>response.json())
      .then(data=>{
      	
      	let name=data["name"];
      	let temperature=data["main"]["temp"];
         

         if(temperature>15){
         	document.body.style.background = "url('Hot Weather.jpg')";
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".temp").innerText = temperature+"º";
         }else{
         	
         	document.body.style.background = "url('Cold Weather.jpg')";
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".temp").innerText = temperature+"º";
         }
      })   
      .catch(error =>alert("Wrong city name!"))
}

function fahrenheitToCelsius(){
   let link="https://api.openweathermap.org/data/2.5/weather?q=";
   let appId="&appid=fb7d1b30a7118355b40022d2ba41b9b6";
   let metricUnit="&units=metric";
   let city=document.getElementById("userInput").value;
   let newLink=link+city+appId+metricUnit;

      fetch(newLink)
      .then(response=>response.json())
      .then(data=>{
         
       let temperature=data["main"]["temp"];
       document.querySelector(".temp").innerText = temperature+"º";
      
      })   
}

function celsiusToFahrenheit(){
   let link="https://api.openweathermap.org/data/2.5/weather?q=";
   let appId="&appid=fb7d1b30a7118355b40022d2ba41b9b6";
   let metricUnit="&units=metric";
   let city=document.getElementById("userInput").value;
   let newLink=link+city+appId+metricUnit;

      fetch(newLink)
      .then(response=>response.json())
      .then(data=>{
         
       let celsius=data["main"]["temp"];
       let fahrenheit=(celsius*(9/5)) + 32;
       document.querySelector(".temp").innerText = fahrenheit+"ºF";
      
      })   
}

