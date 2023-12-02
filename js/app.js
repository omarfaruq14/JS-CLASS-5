let cursor = document.querySelector('.cursor')
let smCursor = document.querySelector('.smCursor')
let thrdCursor = document.querySelector('.thrdCursor')



function customMouse (event) { 
    
    cursor.style.top = `${event.pageY}px`;
    cursor.style.left = `${event.pageX}px`;
    smCursor.style.top = `${event.pageY}px`;
    smCursor.style.left = `${event.pageX}px`;
    
   
}


window.addEventListener('mousemove', customMouse)




let counters = document.querySelectorAll('.counter')

counters.forEach(counter =>{
    let count = 0
    let endingValue = counter.dataset.end;
    let duration = 1000
    let counting = setInterval(function () {
        counter.innerHTML = count++;
        if(count > endingValue ){
            clearInterval(counting)
        }
    }, duration / endingValue)
    
});