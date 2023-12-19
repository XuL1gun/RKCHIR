function changeButtonColor(button) {
    var articul = $(button).attr('data-art')
    if (basket[articul] == undefined){
        button.style.background =  'linear-gradient(to right, #800080, #ffc0cb)';
        button.innerHTML = '<img src="basket.png"></img>';
    }
    else{
        button.style.background = 'grey';
        button.innerHTML = '<img src="checkmark.png"></img>';
    }
  }

$('document').ready(function(){
    checkGoods();
    loadGoods();
});

//Список товаров
var cart = {
    "11111": {
        "name": "Детский паровозик",
        "cost": 1499,
        "image": "до года.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    },
    "22222": {
        "name": "Cортер забавные фигурки",
        "cost": 2999,
        "image": "от 1 до 3.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    },
    "33333": {
        "name": "Кран из дерева",
        "cost": 799,
        "image": "от 3 до 5.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    },
    "44444": {
        "name": "Квадроцикл Wincars",
        "cost": 999,
        "image": "от 5 до 10.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    },
    "55555": {
        "name": "Мстители Война бесконечности ...",
        "cost": 1999,
        "image": "от 10.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    },
    "66666": {
        "name": "Настольная игра Шакал: Остров сокровищ",
        "cost": 2799,
        "image": "шакал.jpg",
        "link": "C:/Users/user/OneDrive/Рабочий стол/РКСЧ/Страничка товара/index.html"
    }
}

var basket = {};//Корзина

//Загрузка товаров на страницу
function loadGoods(){
    var out = '';

    for (var key in cart){
        out += '<li class="pic-container">';
        out += '<a href="'+cart[key].link+'">';
        out += '<img src="'+cart[key].image+'" alt="Игрушки" width="200" height="200">';
        out += '</a>';
        out += '<div class="Inform">';
        out += '<p>'+cart[key]['name']+'</p>';
        out += '<div class="toy">';
        out += '<p><b>'+toCurrency(cart[key]['cost'])+'</b></p>'
        out +=  '<button data-art="'+key+'" class="buy" onclick="changeButtonColor(this)"><img src="basket.png"></button>';
        out += '</div>';
        out += '</div>';
        out += '</li>';
    }
    $('#product_list').html(out);
    $('button.buy').click();
    $('button.buy').on('click', addToCart);
}

function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(num);
    return format;
  }

//Добавление в корзину с помощью localStorage
function addToCart(){
    var articul = $(this).attr('data-art')

    if (articul == undefined)
        return;

    if (basket[articul] == undefined){
        basket[articul] = 1;
        this.style.background = 'grey';
        this.innerHTML = '<img src="checkmark.png"></img>';
    }
    else{
        delete basket[articul];
        this.style.background =  'linear-gradient(to right, #800080, #ffc0cb)';
        this.innerHTML = '<img src="basket.png"></img>';
    }

    localStorage.setItem('basket', JSON.stringify(basket));
}

function checkGoods(){
    if (localStorage.getItem('basket') != null)
        basket = JSON.parse(localStorage.getItem('basket'))
  }