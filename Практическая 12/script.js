var count = 0;

$('document').ready(function(){
    $('.noti_count').html(count);
    createList()
  });

  var timer;
  
  function updateCounter() {
    count++;
    var str = count.toString();
    var out = '<a id="Number">Link ' + str + '</a>';
    $('.dropdown-content').append(out);
    $('.noti_count').html(count);
  }
  
  timer = setInterval(updateCounter, 3000);
  
  $(document).on('click', '#Number', stopCounterFor10Seconds);
  
  function stopCounterFor10Seconds() {
    clearInterval(timer);
    setTimeout(function() {
      timer = setInterval(updateCounter, 3000);
    }, 10000);
  }

  function createList() {
    const list = document.getElementById('list');
    let userInput = prompt("Введите текст");

    while (userInput !== null) {
        userInput = userInput.toString();
        userInput = '<li>' + userInput + '</li>';
        $('#list').append(userInput);
        userInput = prompt("Введите текст");
    }

    alert('И это все? Слабак');
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