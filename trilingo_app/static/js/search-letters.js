var searchBar = document.getElementById('search-bar');

// Получаем все элементы с классом "theme-detail-col"
var themeDetailCols = document.getElementsByClassName('theme-detail-col');

// Функция для выполнения поиска
function search() {
  // Получаем введенный текст из поля поиска и приводим его к нижнему регистру
  var searchText = searchBar.value.toLowerCase();
  
  // Проходимся по каждому элементу с классом "theme-detail-col"
  for (var i = 0; i < themeDetailCols.length; i++) {
    var themeDetailCol = themeDetailCols[i];
    
    // Получаем текст на KZ, RU и EN из текущего "theme-detail-col"
    var kzText = themeDetailCol.querySelector('.letter.kz').textContent.toLowerCase();
    var ruText = themeDetailCol.querySelector('.letter.ru').textContent.toLowerCase();
    var enText = themeDetailCol.querySelector('.letter.en').textContent.toLowerCase();

    // Проверяем, содержит ли текст введенный поисковый запрос
    if (kzText.includes(searchText) || ruText.includes(searchText) || enText.includes(searchText)) {
      // Если содержит, то отображаем элемент
      themeDetailCol.style.display = 'block';
    } else {
      // Если не содержит, то скрываем элемент
      themeDetailCol.style.display = 'none';
    }
  }
}

// Назначаем обработчик события для поля поиска
searchBar.addEventListener('input', search);