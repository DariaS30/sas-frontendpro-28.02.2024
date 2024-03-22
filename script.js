// Функція для виконання AJAX-запиту
    function getWeather() {
    // URL для отримання погоди для міста Львів
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

    // Виконуємо AJAX-запит за допомогою XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
    if (xhr.status === 200) {
    // Отримуємо дані про погоду в форматі JSON
    let data = JSON.parse(xhr.responseText);

    // Формуємо рядок з погодовою інформацією
    let weatherInfo = 'Temperature: ' + data.main.temp + '°C<br>' +
    'Pressure: ' + data.main.pressure + ' hPa<br>' +
    'Description: ' + data.weather[0].description + '<br>' +
    'Humidity: ' + data.main.humidity + '%<br>' +
    'Wind Speed: ' + data.wind.speed + ' m/s<br>' +
    'Wind Direction: ' + data.wind.deg + '°<br>' +
    '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" alt="Weather Icon">';

    // Виводимо погодову інформацію на сторінку
    document.getElementById('weather').innerHTML = weatherInfo;
} else {
    // Виводимо повідомлення про помилку у випадку невдалого запиту
    console.error('Error fetching weather data. Status code:', xhr.status);
}
};
    xhr.send();
}

    // Викликаємо функцію отримання погоди при завантаженні сторінки
    getWeather();