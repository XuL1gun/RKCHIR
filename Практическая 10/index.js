function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        var number = parseInt(prompt("Введите число:"));
        if (!isNaN(number)) {
            this.value += number;
            document.getElementById("value").textContent = this.value;
        } else {
            alert("Вы ввели некорректное число!");
        }
    }
}

var cart = new Accumulator(10);

function addToCart() {
    cart.read();
}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}
    
    var textElement = document.querySelector(".textslice");
    textElement.textContent = truncate(textElement.textContent, 10)

    var textElement1 = document.querySelector(".textslice1");
    textElement1.textContent = truncate(textElement1.textContent, 10)