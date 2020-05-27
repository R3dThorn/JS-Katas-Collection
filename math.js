/* Variable dump */
const addButton = document.getElementById("add-button")
const addTotal = document.getElementById("add-total")
const multButton = document.getElementById("multiply-button")
const multTotal = document.getElementById("multiply-total")
const expButton = document.getElementById("exponent-button")
const expTotal = document.getElementById("exponent-total")
const factButton = document.getElementById("factorial-button")
const factTotal = document.getElementById("factorial-total")
const fibButton = document.getElementById("fibonacci-button")
const fibTotal = document.getElementById("fibonacci-total")

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

function factorial(base) {
    let factorize = base

    while (base > 1){
        base--
        factorize = multiply(base, factorize)
    }
    return factorize
}

function fibbonaci(places){
    let sum = [0, 1]
    let i = 0
    if (places <= 0){
        return ("Not allowed")
    } else {
        while (i <= places){
        sum.push(add(sum[i], sum[i + 1]))
        i++
    }}
    return sum[places - 1]
}

/* ALL BUTTON EVENT LISTENERS HERE */
addButton.addEventListener("click", function(){
    var add1 = parseFloat(document.getElementById("add-input").value)
    var add2 = parseFloat(document.getElementById("add-input2").value)
    addTotal.innerHTML = add(add1, add2)
})
multButton.addEventListener("click", function(){
    var mult = parseFloat(document.getElementById("mult-input").value)
    var times = parseFloat(document.getElementById("mult-input2").value)
    multTotal.innerHTML = multiply(mult, times)
})
expButton.addEventListener("click", function() {
    var baseNum = parseFloat(document.getElementById("exponent-input").value)
    var expNum = parseFloat(document.getElementById("exponent-input2").value)
    expTotal.innerHTML = exponent(baseNum, expNum)
})
factButton.addEventListener("click", function() {
    var baseNum = parseFloat(document.getElementById("factorial-input").value)
    factTotal.innerHTML = factorial(baseNum)
})
fibButton.addEventListener("click", function(){
    var baseNum = parseInt(document.getElementById("fibonacci-input").value)
    fibTotal.innerHTML = fibbonaci(baseNum)
})