let incrementField = document.getElementById('increment_value')
let addBtn = document.getElementById('add')
let substractBtn = document.getElementById('substract')
let resetBtn = document.getElementById('reset')
let counterNumber = document.getElementById('number')

let incrementNumber = 1

incrementField.addEventListener('change', function(e){
    incrementNumber = parseInt(e.target.value)

    if(incrementNumber <1){
        incrementNumber  = 1
    }
})

addBtn.addEventListener('click', function(){
    let total = parseInt(counterNumber.innerText) + incrementNumber
    counterNumber.innerText = total
})

substractBtn.addEventListener('click',function(){
    let total = parseInt(counterNumber.innerText) - incrementNumber

    if(total <0){
        total=0
    }
    
    counterNumber.innerText = total
})

resetBtn.addEventListener('click', function(){
    incrementField.value = 1
    counterNumber.innerText = 0
})
