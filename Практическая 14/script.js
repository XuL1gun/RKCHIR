function Change(Object){
    $('.main img').attr('src', Object.src);
}

$(document).ready(function () {
    $('#selectableList li').click(function (e) {
      if (e.ctrlKey || e.metaKey) {
        $(this).toggleClass('selected');
      } else {
        $('#selectableList li').removeClass('selected');
        $(this).addClass('selected');
      }
    });
  });