setInterval(changeHour,1000);

function changeHour(){
    const date = new Date();
    const hour = formate(date.getHours());
    const minutes = formate(date.getMinutes());
    const seconds = formate(date.getSeconds());
    const hours = concatenate(hour,minutes,seconds)
    let greeting = getG(hour);
    setHour(greeting,hours);
}

function formate(num){
    return num >= 10 ? num : `0${num}`
}
function concatenate(hour,minutes,seconds){
    return `<span class="visor">${hour}</span> : <span class="visor">${minutes}</span> : <span class="seconds visor">${seconds}</span>`
}
function getG(hour){
    if(hour < 12){
        return "Bom dia!"
    } 
    if(hour >= 12 && hour < 18){
        return "Boa tarde!"
    }else{
        return "Boa noite!"
    }
}
function setHour(greeting,hours){
    const h1Greetings = document.querySelector('#greetings')
    const schedule = document.querySelector('#schedule')
    h1Greetings.innerHTML = greeting;
    schedule.innerHTML = hours;
}

function changeBg(){
    const button = document.querySelector('.container button');
    if (button.innerHTML == 'modo light'){
        button.innerHTML = 'modo dark'
    }else{
        button.innerHTML = 'modo light'
    };
    const body = document.querySelector('body');
    body.classList.toggle('bg-light');
    button.classList.toggle('rotate-button')
}



