// Получаем ссылку на поле ввода по его id
const searchBar = document.getElementById('search-bar');

// Добавляем обработчик события для поля ввода
searchBar.addEventListener('input', function(event) {
    // Получаем введенный текст из поля ввода
    const searchText = event.target.value.toLowerCase();

    // Получаем все элементы с классом "themes-text"
    const themeItems = document.querySelectorAll('.theme-item');

    // Проходимся по каждому элементу с классом "themes-text"
    themeItems.forEach(function(themeItem) {
        const themeTexts = themeItem.querySelectorAll('.themes-text');

        // Флаг, указывающий, подходит ли тема поисковому запросу
        let isMatch = false;

        // Проверяем каждый текст внутри элемента на соответствие поисковому запросу
        themeTexts.forEach(function(themeText) {
            const text = themeText.textContent.toLowerCase();

            if (text.includes(searchText)) {
                isMatch = true;
            }
        });

        // Если тема подходит поисковому запросу - показываем элемент, иначе скрываем его
        if (isMatch) {
            themeItem.style.display = 'block';
        } else {
            themeItem.style.display = 'none';
        }
    });
});