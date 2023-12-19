var total = 0;
var elem;
  
  const dragAndDrop = () => {

    $(document).ready(function(){
        const items = document.querySelectorAll('.item');

        items.forEach((item) =>{
            item.addEventListener("dragstart", dragStart);
        })

        cell = $(".square")

        cell.on("dragover", dragOver)
        cell.on("drop", dragDrop)
    });

  };
  
  function dragStart(){
    elem = this
  }

  function dragOver(evt){
    evt.preventDefault();
  }

  function dragDrop(){
    total +=  Number(elem.getAttribute('cost'))
    out = '<p>'+total+'</p>'
    cell.html(out);
  }



  dragAndDrop();