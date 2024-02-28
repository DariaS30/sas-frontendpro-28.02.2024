const options = 5; // Кількість варіантів відповіді

function createSmiley(index) {
    const smiley = document.createElement('div');
    smiley.className = 'smiley';
    smiley.innerText = `😊`; // Ваш смайлик за замовчуванням
    smiley.addEventListener('click', () => {
        counters[index]++;
        updateUI();
    });
    return smiley;
}

const app = document.getElementById('app');
const counters = new Array(options).fill(0);

for (let i = 0; i < options; i++) {
    const smiley = createSmiley(i);
    app.appendChild(smiley);
}

const countersContainer = document.createElement('div');
app.appendChild(countersContainer);

function updateUI() {
    countersContainer.innerHTML = '';
    counters.forEach((count, index) => {
        const countElement = document.createElement('div');
        countElement.innerText = `${count} голосів`;
        countersContainer.appendChild(countElement);
    });
}

updateUI();