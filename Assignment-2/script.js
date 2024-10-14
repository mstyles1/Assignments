function generateMultiplication () {
    let inputValue = document.getElementById("input_number").value
    console.log(document.getElementById("input_number"))
    console.log(inputValue)

    for (let i = 0 ; i <= 10; i++) {
        let result= inputValue * i
        console.log(`${inputValue} x ${i} = ${result} `)  
    }
}