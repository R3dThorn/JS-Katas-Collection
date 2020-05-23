const addButton = document.getElementById("add-button")
const addTotal = document.getElementById("add-total")
const multButton = document.getElementById("multiply-button")
const multTotal = document.getElementById("multiply-total")
const expButton = document.getElementById("exponent-button")
const expTotal = document.getElementById("exponent-total")
const factButton = document.getElementById("factorial-button")
const factTotal = document.getElementById("factorial-total")

/* ALL FUNCTIONS HERE */
function add(addend1, addend2) {
    let sum = addend1 + addend2
    return sum
}

function multiply(base, multiplier) {
    let product = 0

    for (let i = 0; i < multiplier; i++) {
        product += add(base, 0)
    }
    return product
}

function exponent(base, exponent){
    let product = base

    if (exponent == 0){
        return 1
    } else {
        for (i = 0; i < exponent - 1; i++){
            product = multiply(base, product)
    }}
    return product
}

function factorial(base, multiplier) {

}

/* ALL BUTTON EVENT LISTENERS HERE */
addButton.addEventListener("click", function(){
    var add1 = parseInt(document.getElementById("add-input").value)
    var add2 = parseInt(document.getElementById("add-input2").value)
    addTotal.innerHTML = add(add1, add2)
})
multButton.addEventListener("click", function(){
    var mult = parseInt(document.getElementById("mult-input").value)
    var times = parseInt(document.getElementById("mult-input2").value)
    multTotal.innerHTML = multiply(mult, times)
})
expButton.addEventListener("click", function() {
    var baseNum = parseInt(document.getElementById("exponent-input").value)
    var expNum = parseInt(document.getElementById("exponent-input2").value)
    expTotal.innerHTML = exponent(baseNum, expNum)
})
factButton.addEventListener("click", function() {
    var baseNum = parseInt(document.getElementById("factorial-input").value)
    var FactVal = baseNum
    factTotal.innterHTML = factorial(baseNum, FactVal)
})
