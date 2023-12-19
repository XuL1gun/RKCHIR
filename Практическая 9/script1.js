button.onclick = function(){
    let answer = prompt('Желаете пройти регистрацию на сайте?', '')

    if (answer == 'Да'){
        alert('Круто!')
    }
    else{
        alert('Попробуйте ещё раз')
    }
}