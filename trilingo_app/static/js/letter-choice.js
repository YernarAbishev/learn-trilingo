// Получаем ссылки на элементы флагов и элементы, которые нужно подсветить
const kzFlag = document.getElementById('kz-flag');
const kzLetters = document.querySelectorAll('.letter#kz');

const ruFlag = document.getElementById('ru-flag');
const ruLetters = document.querySelectorAll('.letter#ru');

const enFlag = document.getElementById('en-flag');
const enLetters = document.querySelectorAll('.letter#en');

// Функция для очистки подсветки всех элементов
function clearHighlight() {
    kzLetters.forEach(function(letter) {
        letter.style.border = 'none';
    });

    ruLetters.forEach(function(letter) {
        letter.style.border = 'none';
    });

    enLetters.forEach(function(letter) {
        letter.style.border = 'none';
    });
}

// Добавляем обработчик события для флага Казахстана
kzFlag.addEventListener('click', function() {
    // Очищаем подсветку всех элементов
    clearHighlight();

    // Добавляем стиль 'border' к элементам, которые нужно подсветить
    kzLetters.forEach(function(letter) {
        letter.style.border = '2px solid #21428a';
        letter.style.borderRadius = '10px';
    });
});

// Добавляем обработчик события для флага России
ruFlag.addEventListener('click', function() {
    // Очищаем подсветку всех элементов
    clearHighlight();

    // Добавляем стиль 'border' к элементам, которые нужно подсветить
    ruLetters.forEach(function(letter) {
        letter.style.border = '2px solid #21428a';
        letter.style.borderRadius = '10px';
    });
});

// Добавляем обработчик события для флага Великобритании
enFlag.addEventListener('click', function() {
    // Очищаем подсветку всех элементов
    clearHighlight();

    // Добавляем стиль 'border' к элементам, которые нужно подсветить
    enLetters.forEach(function(letter) {
        letter.style.border = '2px solid #21428a';
        letter.style.borderRadius = '10px';
    });
});