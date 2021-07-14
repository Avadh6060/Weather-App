

const btn = document.getElementById("button");
const city = document.getElementById("city_name");
const city__input = document.getElementById("city__input");
const city_error = document.getElementById("city_error");
const weather_type = document.getElementById("w_type");
const temp = document.getElementById("temp");
const weather_info = document.getElementById("weather_info");
const img = document.getElementById("img");
const date = document.getElementById("date");
const day = document.getElementById("day");
const time = document.getElementById("time");

btn.addEventListener("click", async (event) => {

    event.preventDefault();
    const currentDays = [
        'Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    const cityValue = city__input.value;
    if (!cityValue) {
        city_error.innerHTML = "enter the valid city name";
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=52b225c4829b5b400244ce0c9620c120`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            weather_type.innerHTML = arrData[0].weather[0].main;
            temp.innerHTML = `${arrData[0].main.temp_max}<sup>O</sup>C`;

            const D = new Date();
            const newDay = D.getDay();
            day.innerHTML = currentDays[newDay];

            const newMonth = D.getMonth();
            const newDate = D.getDate();
            const newYear = D.getFullYear();

            date.innerHTML = `<span>&nbsp;|&nbsp;</span>${newDate}/${newMonth + 1}/${newYear}<span>&nbsp;|&nbsp;</span>`;

            const newHours = D.getHours();
            const newMinutes = D.getMinutes();

            if (newHours > 11) {
                if (newMinutes < 10) {
                    console.log(time.innerHTML = `${newHours}:  0${newMinutes} PM`);
                }
                else {
                    console.log(time.innerHTML = `${newHours}:${newMinutes} PM`);
                }

            }
            else {
                time.innerHTML = `${newHours}:${newMinutes} AM`;
            }




            const temp_type = arrData[0].weather[0].main;
            if (temp_type === "Clear") {
                document.getElementById("myImg").src = "image/clear.png";
            } else if (temp_type === "Clouds") {
                document.getElementById("myImg").src = "image/clouds.png";

            } else if (temp_type === "Rain") {
                document.getElementById("myImg").src = "image/rain.png";
            }
            else {
                document.getElementById("myImg").src = "image/else.png";
            }
        }
        catch
        {

        }
    }

})

