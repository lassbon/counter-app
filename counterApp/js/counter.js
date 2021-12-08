


let dateInterval = setInterval(() => {
    document.getElementById('to_').innerHTML =  getTodaysDate() 
})


let colorInterval = setInterval(() => {
    document.getElementById('header').style.color = getColor()

}, 5000)


 


document.getElementById('reset').addEventListener("click",  ()=> {
       
    document.getElementById('countme').innerHTML = reset()

})


document.getElementById('up').addEventListener("click", () => {
        let initialVal = document.getElementById('countme').innerHTML
       // console.log(increament(typeof(initialVal)))
        document.getElementById('countme').innerHTML = increament(parseInt(initialVal))

       
    })


document.getElementById('down').addEventListener("click", ()=> {
        let initialVal = document.getElementById('countme').innerHTML
        //console.log(decrement(parseInt(initialVal)))
        document.getElementById('countme').innerHTML = decrement(parseInt(initialVal))

       
})


document.getElementById('stop_').addEventListener("click", () => {
   
    clearInterval(colorInterval)
    alert('i have been stopped')
   
})


 let stopWatchInterval

document.getElementById('stop_watch_start_me').addEventListener("click", () => {

     stopWatchInterval = setInterval(() => {
    let initialVal = document.getElementById('countme').innerHTML
     document.getElementById('countme').innerHTML = increament(parseInt(initialVal))

},1000)

   
})

document.getElementById('stop_watch_stop_me').addEventListener("click", () => {

    clearInterval(stopWatchInterval)
})


function getColor() {
    
    let colorSwaps = ['green', 'red', 'yellow', 'tomato', 'purple', 'indigo']
    let randomNumber = Math.floor((Math.random(0, colorSwaps.length) * colorSwaps.length)) // 0, 4
    let getColorToSwap = colorSwaps[randomNumber]
    
    return getColorToSwap
}


function getTodaysDate() {
    //d-m-y
    let today = new Date()
    return `${today.getFullYear()} -  ${today.getMonth() + 1} -  ${today.getDate()}  
                ${today.getHours()}:${today.getUTCMinutes() }:${today.getSeconds() } `
}

function increament(value) {
 
    return ++value
}


function decrement(value) {

    if (value < 0) {
        alert('Ogbeni , you cannot go below 0')
        return 0
    }
    return --value
}

function reset() {
    
    return 0
}

