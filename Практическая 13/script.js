var count = 0;

$('document').ready(function(){
    $('.noti_count').html(count);
    createList()
  });

  var timer;
  
  function updateCounter() {
    count++;
    var str = count.toString();
    var out = '<div id="Number"><p>Link ' + str + '</p></div>';
    $('.dropdown-content').append(out);
    addElem()
    $('.noti_count').html(count);
  }

  function addElem(){
    // Получаем родительский контейнер с помощью jQuery
    var parentContainer = $('#Parent');

    // Создаем новый элемент
    var newElement = $('<div class="close"><img id="baby" src="img/pngwing.com.png" width="25px" height="25px"></div>');

    // Перебираем дочерние элементы родительского контейнера
    parentContainer.children().each(function() {
      // Проверяем, не содержит ли текущий дочерний элемент уже новый элемент
      if (!$(this).has('.close').length) {
        // Добавляем новый элемент к текущему дочернему элементу
        $(this).append(newElement.clone());
      }
    });
  }


  
  timer = setInterval(updateCounter, 3000);
  
  $(document).on('click', '#Number', stopCounterFor10Seconds);
  
  function stopCounterFor10Seconds() {
    clearInterval(timer);
    setTimeout(function() {
      timer = setInterval(updateCounter, 3000);
    }, 10000);
  }

function ShowNotification(options) {
    const notification = $('#notification');
    notification.text(options.content);
    notification.addClass('notification');
    notification.css('display', 'block');
    
    setTimeout(function() {
      notification.css('display', 'none');
      notification.text('');
      notification.removeClass('notification');
    }, 1500);
  }
  ShowNotification({ content: 'Слава богу успел ПЕРЕДЕЛАТЬ ЭТУ ФИГНЮ!!!' });

  $(document).ready(function() {
    var parentWidth = $('.container').width();
    var parentHeight = $('.container').height();
    var imageWidth = $('#baby').width();
    var imageHeight = $('#baby').height();
    var marginLeft = (parentWidth - imageWidth) / 2;
    var marginTop = (parentHeight - imageHeight) / 2;
    $('#baby').css('margin-left', marginLeft);
    $('#baby').css('margin-top', marginTop);
  });

  document.addEventListener('click', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log('Координаты клика: ' + x + ', ' + y);
  });