
const form = document.getElementById('number-check');

function checksecondnumber(number1, number2) {
    const check =  number2.value > number1.value;
    return check;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstnumber = document.getElementById('id-number-1');
    const secondnumber = document.getElementById('id-number-2');

    const messageerror = 'Número menor que o anterior';

    valor_1 = checksecondnumber(firstnumber, secondnumber);

    if (!valor_1) {
        const espacomensagem = document.querySelector('.message-error');
        espacomensagem.innerHTML = messageerror;
        espacomensagem.style.display = 'block';

    } else {
        document.querySelector('.message-error').style.display = 'none';
    }


})
