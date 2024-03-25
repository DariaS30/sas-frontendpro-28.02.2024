// Запитуємо рік народження
const birthYear = prompt("Введіть ваш рік народження:");

// Запитуємо місто проживання
const city = prompt("Введіть ваше місто проживання:");

// Запитуємо улюблений вид спорту
const favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

// Визначаємо поточний рік
const currentYear = new Date().getFullYear();

// Функція, яка генерує повідомлення про випадкового чемпіона
function generateChampionMessage(sport) {
    const champions = {
        "футбол": ["Ліонель Мессі", "Кріштіану Роналду", "Неймар"],
        "теніс": ["Рафаель Надаль", "Роджер Федерер", "Новак Джокович"],
        "баскетбол": ["Леброн Джеймс", "Кевін Дюрант", "Г'яніс Антетокунмпо"]
    };

    const randomChampion = champions[sport][Math.floor(Math.random() * 3)]; // Випадковий чемпіон
    return `Круто! Хочеш стати ${randomChampion}?`;
}

let message = ""; // Початкове повідомлення

// Перевіряємо, чи користувач ввів всі дані
if (birthYear && city && favoriteSport) {
    // Обчислюємо вік користувача
    const age = currentYear - birthYear;

    // Визначаємо повідомлення про місто
    let cityMessage;
    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        cityMessage = `Ти живеш у столиці ${getCountry(city)}.`;
    } else {
        cityMessage = `Ти живеш у місті ${city}.`;
    }

    // Формуємо повідомлення
    message = `Ваш вік: ${age}\n${cityMessage}\nВаш улюблений вид спорту: ${favoriteSport}\n`;

    // Перевіряємо, чи вказаний улюблений вид спорту знаходиться серед відомих
    const famousSports = ["футбол", "теніс", "баскетбол"];
    if (famousSports.includes(favoriteSport.toLowerCase())) {
        message += generateChampionMessage(favoriteSport.toLowerCase());
    }
} else {
    message = "Шкода, що Ви не захотіли ввести свій(ю) ";
    if (!birthYear) {
        message += "рік народження";
    }
    if (!city) {
        message += ", місто";
    }
    if (!favoriteSport) {
        message += ", вид спорту";
    }
    message += ".";
}

// Відображаємо інформацію в вікні
alert(message);

// Функція, яка повертає країну для столиці
function getCountry(capital) {
    switch (capital) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
        default:
            return "";
    }
}
