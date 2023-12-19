button1.onclick = function(){
    let answer = prompt('Кто вы?', '')

    if (answer == 'Админ'){
        let passwd = prompt('Не желаете ввести пароль?', '')
        if (passwd == "Я главный"){
            alert('Здравствуйте')
        }
        else if(passwd == null){
            alert('Отменено')
        }
        else{
            alert('Неверный пароль')
        }
    }
    else if(answer == null){
        alert('Отменено')
    }
    else{
        alert('Я вас не знаю')
    }
}