document.addEventListener('DOMContentLoaded', function() {
    const catalog_burger = document.querySelector('.catalog_burger');
    const catalog = document.querySelector('.Catalog');
  
    catalog_burger.addEventListener('click', function(event) {
        catalog_burger.classList.toggle('menu');
        catalog.classList.toggle('menu');
    });
  });