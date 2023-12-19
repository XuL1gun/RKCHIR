// Создание массива для хранения элементов
var elements = [];
var draw = false;

// Обработчик события перемещения курсора мыши
document.addEventListener('mousemove', function(event) {

    if (draw){
    // Получение координат курсора
        var x = event.clientX;
        var y = event.clientY;
        
        // Создание нового элемента
        var newElement = document.createElement('div');
        newElement.style.position = 'absolute';
        newElement.style.width = '10px';
        newElement.style.height = '10px';
        newElement.style.backgroundColor = 'red';

        // Позиционирование нового элемента следуя за курсором
        newElement.style.left = (x - 10) + 'px';
        newElement.style.top = (y - 10) + 'px';

        // Добавление нового элемента на страницу
        document.body.appendChild(newElement);
        
        // Добавление нового элемента в массив
        elements.push(newElement);
    }
});

button3.onclick = function(){
    if (draw){
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.parentNode.removeChild(element);
        }

        // Очистка массива
        elements = [];
    }

    draw = !draw;

}

// Обработчик события клика мыши
document.addEventListener('click', function() {
    // Удаление всех элементов из массива и со страницы
});