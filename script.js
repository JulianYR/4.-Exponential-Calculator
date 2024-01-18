document.getElementById('calculate').addEventListener('click', () => {

    const number = parseFloat(document.getElementById('number').value)
    const exponential = parseFloat(document.getElementById('exponential').value)

    if (!isNaN(number) && !isNaN(exponential)){
        const result = Math.pow(number, exponential)
        document.getElementById('result').textContent = `The result is: ${result}.`
    }
    else {
        document.getElementById('result').textContent = `We're sorry. Please enter valid numbers for the base and exponential.`
    }

})