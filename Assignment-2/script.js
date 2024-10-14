function generateMultiplication () {
    let inputValue = document.getElementById("input_number").value
    let inputResult = document.getElementById("result")


    for (let i = 0 ; i <= 10; i++) {
        let result = inputValue * i
        inputResult.innerHTML += `${inputValue} X ${i} = ${result} <br>`
        
    }
}