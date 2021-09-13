function calculate() {
    let value_1 = parseInt(document.getElementById('value_1').value);
    let value_2 = parseInt(document.getElementById('value_2').value);
    let summ = document.getElementById('summ');
    summ.innerHTML = value_1+value_2;
}

function addText() {

    let text = document.getElementById('text');
    let text_value = text.value;
    let text_result = document.getElementById('text_result');

    text_result.innerHTML += text_value+"<br>";
    text.value = '';
    console.log(value_1);
}

