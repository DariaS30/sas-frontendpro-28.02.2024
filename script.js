function generateList(array) {
    let html = '<ul>';
    array.forEach(item => {
        html += '<li>'; //
        if (Array.isArray(item)) {
            html += generateList(item);
        } else {
            html += item;
        }

        html += '</li>';
    });

    html += '</ul>';
    return html;
}

const array = [1, 2, [3, 4, [5, 6], 7], 8];
const result = generateList(array);
document.body.innerHTML = result; // відображаємо результат на сторінці

