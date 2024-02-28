
const apiKey="ff553f7cc893a2fb01fed6221efc5b86";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const button=document.querySelector('.buton')
const searchBox=document.getElementById('city')
let data;
// async function checkWeather(city) {
//   const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
//      data=await response.json()
     
//     //  return data
// }


button.addEventListener("click",(e)=>{
  e.preventDefault()
  const city=searchBox.value;
  fetch(apiUrl + city + `&appid=${apiKey}`).then((data)=>{
    return data.json()
  }).then((data)=>{
    console.log( data);
       changeTemp(data.main.temp,data.name)
       changeHumadity(data)
       changeImg(data.weather)
       document.querySelector('.main').style.display='block';
  }).catch((err) => {
    console.log(err.message);
  })
 
})
function changeTemp(data,city_d) {
   let temp=document.querySelector('.temp_v')
   let city =document.querySelector('.temp_c')
   temp.innerHTML=data;
   city.innerHTML=city_d;
   
}
function changeHumadity(data) {
  let humadity=document.querySelector('#humadity_v')
   let windspeed =document.querySelector('#wind_v')
   humadity.innerHTML=`${data.main.humidity}% `
   windspeed.innerHTML=`${data.wind.speed} km/hr `
}

function changeImg(data) {
  let weatherIcon=document.querySelector('#img')
  if(data[0].main === "Clouds"){
    weatherIcon.src="clouds.png";
}
else if(data[0].main === "Clear"){
  console.log('clear hai sb');
    weatherIcon.src="clear.png";
}
else if (data[0].main === "Rain") {
    weatherIcon.src = "rain.png";
}
else if (data[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
}
else if (data[0].main === "Mist") {
    weatherIcon.src = "mist.png";
}
}



