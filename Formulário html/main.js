document.getElementById('form-numerico').addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = (document.getElementById('campo-numericoA').value);
    const campoB = (document.getElementById('campo-numericoB').value);
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.sucess-message');

    if (campoB > campoA) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        document.getElementById('form-numerico').reset();

    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});