document.getElementById('calculateButton').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        const result = number1 * number2; 
        document.getElementById('calculationResult').textContent = `Résultat : ${result}`;
    } else {
        document.getElementById('calculationResult').textContent = "Veuillez entrer deux nombres valides.";
    }
});