const key = "ced190c9041e882f1f30d25fe7fd4cb8";
let cityID = 2618425;
const select = document.querySelector(".form-select");

const fahrenheitToCelsius = (fahrenheit) =>
{
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(1);
};


const getCity = () => {
    fetch(`cityy.json`,
    {
        method: 'GET',
    })
  .then(respone => respone.json())
  .then(data => {
      data.forEach(city => {
        const option = document.createElement("option");
        option.value = city.id;
        option.text = city.name;

        select.appendChild(option);
      });
  })
  .catch((error) => {
    console.log('Eroor:', error);
  });
}

const getWeather = (cityID = 2618425) => {

}

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`,
    {
        method: 'GET',
    })
  .then(respone => respone.json())
  .then(data =>{
      console.log('Success:', data);
  })
  .catch((error) => {
    console.log('Eroor:', error);
  });

  getCity();